import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Circle } from './components/Circle';

import './global.css';
import styles from'./App.module.css'

export function App() {
  return (
    <div>
     <Header />

     <div className={styles.wrapper}>
        <main>
          <Hero />
          <Circle />
        </main>
     </div>
    </div>
  )
}
