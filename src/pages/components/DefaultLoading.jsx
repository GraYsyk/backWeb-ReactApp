import { useEffect, useState } from "react";
import '../../styles/components/defaultLoading.css'
import { createPortal } from "react-dom";

const MESSAGES = [
  'Connecting to server...',
  'Creating user...',
  'Validating data...',
  'Almost there...',
  'Last changes...',
  'Done!'
];

export function DefaultLoading({ textVariants, exitFunc }) {
  const [textIndex, setTextIndex] = useState(0);
  const textArr = textVariants || MESSAGES;

  useEffect(() => {
    const id = setInterval(() => {
      setTextIndex(prev => {
        if (prev >= textArr.length - 1) {
          clearInterval(id);
          return prev;
        }
        return prev + 1;
      });
    }, 2000);

    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (textIndex >= textArr.length - 1) {
      const id = setTimeout(() => exitFunc(), 500);
      return () => clearTimeout(id);
    }
  }, [textIndex]);

  return createPortal(
    <div className="loading-screen">
      <div className="loading-spinner" />
      <div className="loading-msg">{textArr[textIndex]}</div>
      <div className="loading-index">-- {textIndex + 1}/{textArr.length}</div>
    </div>,
    document.body);
}