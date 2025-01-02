import posterStarWars from '../../src/assets/poster.jpg'
import styles from './cardStyle.module.css'


export default function Card() {
    return (
        <div className={styles.card}>
            <div className={styles.cardImage}>
                <img src={posterStarWars} alt="star wars" />
            </div>
            
            <div className={styles.cardInfo}>
                <h2>Star Wars 1977</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error dolorem ipsum sit blanditiis sint eaque. Eligendi consectetur minus ipsa incidunt placeat! Harum quia commodi itaque dolore natus, vitae corrupti atque.</p>
                <button>Comprar agora</button>
            </div>
        </div>      
        )
}