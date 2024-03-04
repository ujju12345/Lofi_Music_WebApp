import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Player = (props) => {
    const noise = props.noise;
    return (
        <AudioPlayer
            autoPlay
            header={noise.title}
            src={noise.url}
            showSkipControls={false}
            showJumpControls={false}
            showFilledProgress={false}
            loop={true}
        />
    );
};

export default Player;