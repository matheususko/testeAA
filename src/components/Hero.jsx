import styles from './Hero.module.css'

import arrowButton from '../assets/Arrow.svg'

export function Hero() {
    return (
        <aside className={styles.hero}>
            <div>
                <strong>Accessing Level</strong>
               
            </div>
            <div> <p>Get the edge with innovative product development, high-end web design, and effective branding.</p></div>
            
            
                <button> <img src={arrowButton}/> </button>
           
        </aside>
    )
}