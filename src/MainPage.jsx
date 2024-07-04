import React, { useState } from 'react';
import AudioLoader from './components/AudioLoader';
import Transcriber from './components/Transcriber';
import Summarizer from './components/Summarizer';
import Header from './components/Header';
import DownloadButton from './components/DownloadButton';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const MainPage = () => {
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

  const handleDownload = (type) => {
    const textToSave = type === 'transcription' ? transcription : summary;
    const blob = new Blob([textToSave], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${type}.txt`;
    link.click();
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
        <Row className="mb-3">
          <Col>
            <Transcriber
              file={file}
              onTranscriptionComplete={handleTranscriptionComplete}
            />
            {transcription && (
              <>
                <FloatingLabel controlId="floatingTextarea1" className="mb-3" label="Transcription">
                  <Form.Control
                    as="textarea"
                    value={transcription}
                    readOnly
                    rows={10}
                    style={{ height: '250px' }}
                  />
                </FloatingLabel>
                <DownloadButton onDownload={() => handleDownload('transcription')} />
              </>
            )}
          </Col>
          <Col>
            <Summarizer transcription={transcription} onSummaryComplete={handleSummaryComplete} />
            {summary && (
              <>
                <FloatingLabel controlId="floatingTextarea2" className="mb-3" label="Summary">
                  <Form.Control
                    as="textarea"
                    value={summary}
                    readOnly
                    rows={10}
                    style={{ height: '250px' }}
                  />
                </FloatingLabel>
                <DownloadButton onDownload={() => handleDownload('summary')} />
              </>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainPage;
