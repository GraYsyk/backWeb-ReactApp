import { Link } from 'react-router';
import '../styles/startPage/header.css'
import '../styles/startPage/shell.css'
import '../styles/startPage/footer.css'
import { Header } from './components/startPage/Header';
import { Shell } from './components/startPage/Shell';
import { Footer } from './components/startPage/Footer';

//TODO: DESIGN A BIT MORE

export function StartPage() {
  return (
    <>
      <Shell></Shell>
    </>
  );
}