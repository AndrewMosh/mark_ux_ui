import Player from "../Player/Player";
import DateTime from "../DateTime/DateTime";
import "./MediaInfoPlayer.scss";

export const MediaInfoPlayer = () => {
	return (
		<div className="media-info-player">
			<Player />
			<DateTime />
		</div>
	);
}