import { useEffect, useState } from "react";
import '../styles/credits.css'

const LINES = [
  '> Initializing credits...',
  '> Loading contributors...',
  '> !Checking if database is alive... [ TIMEOUT ]',
  '> !Retrying... [ TIMEOUT ]',
  '> Assuming database is fine.',
  '',
  '  user_registration_system v0.3.1',
  '  build 2026.11.03.0847',
  '  status: probably works',
  '',
  '> AUTHORS:',
  '  -- !GraYsyk · Trying Front-End since 2026',
  '  -- Coffee · responsible for 90% of commits',
  '  -- Stack Overflow · responsible for the other 10%',
  '  -- ChatGPT · consulted but ignored',
  '  -- The browser · for not crashing (most of the time)',
  '',
  '> SPECIAL THANKS:',
  '  -- To the user who actually completed registration',
  '  -- To the database that probably saved your data',
  '  -- To the regex that rejected 47 valid emails',
  '  -- To Math.random() for placing buttons in unreachable areas',
  '  -- To the captcha victims who never found their password',
  '  -- To localStorage for not being supported here',
  '  -- To console.log() our most loyal debugging tool',
  '',
  '> STATISTICS:',
  '  -- Average registration time: 47 minutes',
  '  -- Passwords rejected: countless',
  '  -- Captcha attempts: too many',
  '  -- Emails flagged as incorrect: all of them',
  '  -- Users who read Terms & Conditions: 0',
  '  -- Buttons that ran away: 5',
  '  -- Flying characters deleted: unknown',
  '',
  '> WARNINGS:',
  '  -- No user data was harmed during registration',
  '  -- We cannot confirm the same about your patience',
  '  -- Phone numbers entered: mostly fictional',
  '  -- Birthdays selected: suspiciously many in 1900',
  '',
  '> POST /logout HTTP/1.1',
  '> 200 OK · session terminated',
  '> Clearing cache... done',
  '> Deleting your data... just kidding',
  '> System shutting down...',
  '> !Thank you for playing.',
  '> See you at v0.4.0',
  '',
  '',
  '_']

export function Credits() {
  const [visibleLines, setVisibleLines] = useState([]);
  const [currentLine, setCurrentLine] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= LINES.length) return;

    if (charIndex < LINES[lineIndex].length) {
      const id = setTimeout(() => {
        setCurrentLine(prev => prev + LINES[lineIndex][charIndex]);
        setCharIndex(prev => prev + 1);
      }, 10);
      return () => clearTimeout(id);
    } else {
      const id = setTimeout(() => {
        setVisibleLines(prev => [...prev, currentLine]);
        setCurrentLine('');
        setCharIndex(0);
        setLineIndex(prev => prev + 1);
      }, 30);
      return () => clearTimeout(id);
    }
  }, [charIndex, lineIndex]);

  return (
    <div className="credits-screen">
      <div className="credits-terminal">
        {visibleLines.map((line, i) => (
          <div key={i} className={`credits-line ${line.includes('!') ? 'credits-line warn' : ''}`}>
            {line || '\u00A0'}
          </div>
        ))}
        {lineIndex < LINES.length && (
          <div className="credits-line">
            {currentLine}<span className="credits-cursor">█</span>
          </div>
        )}
      </div>
    </div>
  );
}