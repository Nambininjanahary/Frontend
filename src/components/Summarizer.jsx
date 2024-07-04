import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

const Summarizer = ({ transcription, onSummaryComplete }) => {
  const [loading, setLoading] = useState(false);

  const handleSummarize = async () => {
    setLoading(true);
    try {
      const response = await axios.post('/api/summarize/', { transcription });
      onSummaryComplete(response.data.summary);
    } catch (error) {
      console.error('Error summarizing transcription:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Button variant="outline-light" onClick={handleSummarize} disabled={!transcription || loading}>
        {loading ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> : 'Summary'}
      </Button>
    </div>
  );
};

export default Summarizer;
