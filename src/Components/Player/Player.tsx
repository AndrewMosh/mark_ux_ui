import React, { useEffect, useRef, useState } from 'react';
import play from '../../assets/play.svg';
import pause from '../../assets/pause.svg';
import youtube from '../../assets/youtube.svg';
import { Link } from 'react-router-dom';
import mixer from '../../assets/mixer.svg';
import './Player.scss'

const Player: React.FC = () => {
  const playerRef = useRef<HTMLDivElement>(null);
  const [player, setPlayer] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showNotification, setShowNotification] = useState(true);

  useEffect(() => {
    if (window.Twitch && playerRef.current) {
      const newPlayer = new window.Twitch.Player(playerRef.current, {
        channel: 'leekbeats', // Замените на нужный канал Twitch
        autoplay: true, // Включаем автозапуск
        muted: isMuted, // Начальное состояние звука
        width: '0',  // Скрываем плеер
        height: '0', // Скрываем плеер
      });

      newPlayer.setVolume(0.5); // Настройка громкости

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

  const handleUserInteraction = () => {
    setIsMuted(false); // Размутируем при взаимодействии
    setShowNotification(false); // Скрываем уведомление
  };

  const togglePlayPause = () => {
    if (player) {
      if (isPlaying) {
        player.pause();
      } else {
        player.play();
      }
    }
  };

  return (
    <div className='player'>
      <div className='player__wrapper' ref={playerRef} onClick={handleUserInteraction}></div> {/* Скрытый плеер */}
	  <div className="player__buttons">
		<Link  to='https://www.twitch.tv/leekbeats' target="_blank">
		<button>
		<img src={youtube} alt="twitch" />
		</button>
		</Link>
      <button  onClick={togglePlayPause}>
        <img src={isPlaying ? pause : play} alt={isPlaying ? 'Pause' : 'Play'} />
      </button>
	  <button>
		<img src={mixer} alt="звук" />
	  </button>
	  </div>
      {showNotification && (
        <div style={{ position: 'fixed', top:'10px', right: '10px', backgroundColor: 'black', padding: '10px', borderRadius: '5px' }}>
          <p>To hear the audio, please click anywhere on the page.</p>
          <button style={{color:'white'}} onClick={handleUserInteraction}>Включить </button>
        </div>
      )}
    </div>
  );
};

export default Player;