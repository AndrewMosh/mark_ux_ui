import React, { useEffect, useRef, useState } from "react";
import play from "../../assets/images/play.svg";
import pause from "../../assets/images/pause.svg";
import youtube from "../../assets/images/youtube.svg";
import { Link } from "react-router-dom";
import mixer from "../../assets/images/mixer.svg";
import "./Player.scss";
import low from "../../assets/images/mixer-low.svg";
import max from "../../assets/images/mixer-max.svg";
import { useTitleStore } from "../../store/useTitleStore";
import off from "../../assets/images/mixer-off.svg";

const Player: React.FC = () => {
    const playerRef = useRef<HTMLDivElement>(null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [player, setPlayer] = useState<any>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [volume, setVolume] = useState(0.0);
    const [range, setRange] = useState(false);
    const volumeRef = useRef<HTMLDivElement>(null);
	const {isScrolled}=useTitleStore()

    useEffect(() => {
        if (window.Twitch && playerRef.current) {
            const newPlayer = new window.Twitch.Player(playerRef.current, {
                channel: "leekbeats", // Замените на нужный канал Twitch
                autoplay: true, // Включаем автозапуск
                muted: isMuted, // Начальное состояние звука
                width: "0", // Скрываем плеер
                height: "0", // Скрываем плеер
            });

            newPlayer.setVolume(volume); // Устанавливаем начальную громкость

            // Обновляем состояние при воспроизведении
            newPlayer.addEventListener(Twitch.Player.PLAY, () => {
                setIsPlaying(true);
                if (!isMuted) {
                    newPlayer.unmute(); // Снимаем звук, если разрешено
                }
            });

            newPlayer.addEventListener(Twitch.Player.PAUSE, () => setIsPlaying(false));
            newPlayer.addEventListener(Twitch.Player.READY, () => {
                if (!isMuted) {
                    newPlayer.unmute(); // Попытка снять mute после загрузки
                }
            });

            setPlayer(newPlayer);
        }
    }, [isMuted]);

	useEffect(() => {
		const handleVisibilityChange = () => {
			if (document.visibilityState === "visible" && player) {
				// Проверка, что плеер готов, и обновление состояния
				if (player.isPaused()) {
					setIsPlaying(false);
				} else {
					setIsPlaying(true);
				}
			}
		};
	
		document.addEventListener("visibilitychange", handleVisibilityChange);
	
		return () => {
			document.removeEventListener("visibilitychange", handleVisibilityChange);
		};
	}, [player]);
	
	const togglePlayPause = () => {
		if (player) {
			if (isPlaying) {
				player.pause();
				setIsPlaying(false);
			} else {
				player.play();
				setIsPlaying(true);
			}
		}
	};
	
	

    useEffect(() => {
        // Обработчик кликов вне элемента volume
        const handleClickOutside = (event: MouseEvent) => {
            if (volumeRef.current && !volumeRef.current.contains(event.target as Node)) {
                setRange(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleUserInteraction = () => {
        setIsMuted(false); // Размутируем при взаимодействии
    };

	const handleSound = () => {
		if (volume===0.0) {
		setVolume(0.5);
			setIsMuted(false);
		} else {
			setVolume(0.0);
			setIsMuted(true);
		}
		if (player) {
            player.setVolume(volume); // Обновляем громкость плеера
        }
	};



    const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(event.target.value);
        setVolume(newVolume);
        if (player) {
            player.setVolume(newVolume); // Обновляем громкость плеера
        }
    };

    return (
		<div className={isScrolled ? "player__scrolled" : "player"}>            <div className="player__wrapper" ref={playerRef} onClick={handleUserInteraction}></div> {/* Скрытый плеер */}
            <div className="player__buttons">
                <Link to="https://www.twitch.tv/leekbeats" target="_blank">
                    <button>
                        <img src={youtube} alt="twitch" />
                    </button>
                </Link>
                <button onClick={togglePlayPause}>
                    <img src={isPlaying ? pause : play} alt={isPlaying ? "Pause" : "Play"} />
                </button>
                <div
                    onMouseEnter={() => setRange(true)}
                >
                    <button>
                        <img src={volume===0.0? off:mixer} alt="звук" onClick={handleSound} />
                    </button>
                    {range && (
                        <div ref={volumeRef}    onMouseLeave={() => setRange(false)}className="player__volume">
                            <img src={max} alt="max" />
                            <input
                                type="range"
                                id="volume"
                                name="volume"
                                min="0"
                                max="1"
                                step="0.01"
                                value={volume}
                                onChange={handleVolumeChange}
                                className="styled-slider"
                            />
                            <img src={low} alt="low" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Player;
