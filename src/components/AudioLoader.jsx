import React, { useRef, useState, useEffect } from 'react';
import WaveSurfer from 'wavesurfer.js';
import './AudioUploader.css';
import 'bootstrap/dist/css/bootstrap.min.css';// Ensure this is the correct path to your CSS file

const AudioLoader = ({ onFileLoaded }) => {
  const [audioURL, setAudioURL] = useState(null);
  const waveformRef = useRef(null);
  const waveSurferRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setAudioURL(url);
      onFileLoaded(file);
    }
  };

  useEffect(() => {
    if (audioURL && !waveSurferRef.current) {
      waveSurferRef.current = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: '#faebd7', // Waveform color
        progressColor: '#ffffff', // Progress color
        height: 100, // Waveform height
      });
      waveSurferRef.current.load(audioURL);
    }
  }, [audioURL]);

  const handlePlay = () => {
    if (waveSurferRef.current) {
      waveSurferRef.current.playPause();
    }
  };

  return (
    <div className="center-container d-flex flex-column align-items-center">
      <label htmlFor="file-upload" className="custom-file-label">
        Choose File
      </label>
      <input
        id="file-upload"
        type="file"
        accept="audio/*"
        onChange={handleFileChange}
        className="custom-file-input"
      />
      {audioURL && (
        <div>
          <audio controls src={audioURL} onPlay={handlePlay} className="custom-audio">
            Your browser does not support the audio element.
          </audio>
          <div ref={waveformRef} className="waveform-container"></div>
        </div>
      )}
    </div>
  );
};

export default AudioLoader;