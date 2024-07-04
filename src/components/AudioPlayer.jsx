import React, { useState, useRef } from 'react';

const AudioPlayer = () => {
    const [audioUrl, setAudioUrl] = useState(null);
    const audioRef = useRef(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setAudioUrl(url);
        }
    };

    const handlePlay = () => {
        audioRef.current.play();
    };

    const handlePause = () => {
        audioRef.current.pause();
    };

    const handleStop = () => {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
    };

    return (
        <div>
            <input type="file" accept="audio/*" onChange={handleFileChange} />
            {audioUrl && (
                <div>
                    <audio ref={audioRef} src={audioUrl} controls={false} />
                    <div>
                        <button onClick={handlePlay}>Play</button>
                        <button onClick={handlePause}>Pause</button>
                        <button onClick={handleStop}>Stop</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AudioPlayer;
