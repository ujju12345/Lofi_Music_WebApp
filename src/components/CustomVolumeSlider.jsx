import React from 'react';

const CustomVolumeSlider = ({ volume, onChange }) => {
    const handleVolumeChange = (e) => {
        onChange(parseFloat(e.target.value));
    };

    return (
        <div className="rhap_volume-container">
            <div className="rhap_volume-controls">
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="rhap_volume-bar"
                />
                <div className="rhap_volume-bar-area">
                    <div
                        className="rhap_volume-indicator"
                        style={{ width: `${volume * 100}%` }}
                    />
                </div>
            </div>
        </div>
    );
};

export default CustomVolumeSlider;
