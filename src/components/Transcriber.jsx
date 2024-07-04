import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

const Transcriber = ({ file, onTranscriptionComplete }) => {
  const [loading, setLoading] = useState(false);

  const handleTranscribe = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('/api/transcribe/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      onTranscriptionComplete(response.data.transcription);
    } catch (error) {
      console.error('Error transcribing audio:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Button variant="outline-light" onClick={handleTranscribe} disabled={!file || loading}>
        {loading ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> : 'Transcribe'}
      </Button>
    </div>
  );
};

export default Transcriber;
