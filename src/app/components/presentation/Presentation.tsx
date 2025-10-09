import Image from "next/image";
import styles from './Presentation.module.css'

export default function Presentation() {
    return(
        <div className={styles.presentation}>
            <span className={styles.presentationAvailable}>Available for new opportunities</span>

            <h1>Hello! 👋 I´m <span>Diego</span></h1>

            <p className={styles.presentationDescription}>A software engineer passionate about crafting beautiful, accessible, and performant web experiences. I specialize in building pixel-perfect interfaces with modern technologies.</p>

            <div className={styles.presentationButtons}>
                <button className={styles.viewMyWorkButton}>View My Work <Image src='/file.svg' width={20} height={20} alt="Arrow icon"/></button>
                <button className={styles.getInTouchButton}>Get in touch</button>
            </div>

            <div className={styles.presentationStats}>
                <div>
                    <span>5+</span>
                    <p>Years Experience</p>
                </div>
                <div>
                    <span>5+</span>
                    <p>Projects Completed</p>
                </div>
                <div>
                    <span>3+</span>
                    <p>Happy Clients</p>
                </div>
            </div>
        </div>
    )
}