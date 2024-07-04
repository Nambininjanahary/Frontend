import React, { useEffect, useState } from 'react';
import './WordFlick.css'; // Assurez-vous de créer ce fichier CSS pour styliser votre animation

const WordFlick = () => {
  const words = [
    'INTELEAD',
    'WELCOME',
  ];

  const [part, setPart] = useState('');
  const [i, setI] = useState(0);
  const [offset, setOffset] = useState(0);
  const [forwards, setForwards] = useState(true);
  const [skipCount, setSkipCount] = useState(0);

  const len = words.length;
  const skipDelay = 15;
  const speed = 70;

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        if (offset >= words[i].length) {
          setSkipCount((prev) => prev + 1);
          if (skipCount === skipDelay) {
            setForwards(false);
            setSkipCount(0);
          }
        }
      } else {
        if (offset === 0) {
          setForwards(true);
          setI((prev) => (prev + 1) % len);
          setOffset(0);
        }
      }

      const part = words[i].substr(0, offset);
      setPart(part);

      if (skipCount === 0) {
        setOffset((prev) => (forwards ? prev + 1 : prev - 1));
      }
    }, speed);

    return () => clearInterval(interval);
  }, [forwards, i, offset, skipCount, words]);

  return <div className="word">{part}</div>;
};

export default WordFlick;
