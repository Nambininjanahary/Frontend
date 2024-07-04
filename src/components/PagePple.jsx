import React, { useState } from 'react';
import AudioLoader from './components/AudioLoader';
import Transcriber from './components/Transcriber';
import Summarizer from './components/Summarizer';
import Header from './components/Header';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const PagePple = () => {
  const [file, setFile] = useState(null);
  const [transcription, setTranscription] = useState('');
  const [summary, setSummary] = useState('');

  const handleFileLoaded = (loadedFile) => {
    setFile(loadedFile);
    setTranscription('');
    setSummary('');
  };

  const handleTranscriptionComplete = (transcribedText) => {
    setTranscription(transcribedText);
  };

  const handleSummaryComplete = (summaryText) => {
    setSummary(summaryText);
  };

  return (
    <div className="App">
      <Header />
      <Container>
        <Row className="my-4">
          <Col>
            <AudioLoader onFileLoaded={handleFileLoaded} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Transcriber file={file} onTranscriptionComplete={handleTranscriptionComplete} />
            <FloatingLabel controlId="floatingTextarea1"  className="mb-3">
              <Form.Control
                as="textarea"
                value={transcription}
                readOnly
                rows={10}
                style={{ height: '150px' }}
              />
            </FloatingLabel>
          </Col>
          <Col>
            <Summarizer transcription={transcription} onSummaryComplete={handleSummaryComplete} />
            <FloatingLabel controlId="floatingTextarea2"  className="mb-3">
              <Form.Control
                as="textarea"
                value={summary}
                readOnly
                rows={10}
                style={{ height: '150px' }}
              />
            </FloatingLabel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PagePple;
