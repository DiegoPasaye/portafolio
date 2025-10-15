import Image from 'next/image'
import styles from './NavBar.module.css'

export default function NavBar() {
    return(
        <div className={styles.nav}>
            <div className={styles.bodyNav}>
                <h1>Diego Pasaye</h1>

                <h2>Software Engineer</h2>

                <p>Building beautiful and interactive experiences with clean and efficient code.</p>

                <div className={styles.sectionsLink}>
                    <div className={styles.sectionsLinkContainer}>
                        <div></div>
                        <a href="#presentation">HOME</a>
                    </div>
                    <div className={styles.sectionsLinkContainer}>
                        <div></div>
                        <a href="#aboutMe">ABOUT</a>
                    </div>
                    <div className={styles.sectionsLinkContainer}>
                        <div></div>
                        <a href="#projects">PROJECTS</a>
                    </div>
                    <div className={styles.sectionsLinkContainer}>
                        <div></div>
                        <a href="#experience">EXPERIENCE</a>
                    </div>
                    <div className={styles.sectionsLinkContainer}>
                        <div></div>
                        <a href="#contact">CONTACT</a>
                    </div>
                </div>
            </div>

            <div className={styles.social}>
                <a href='https://github.com/DiegoPasaye'><Image src='/github.svg' alt='Github icon' width={25} height={25}/></a>
                <a href='https://www.linkedin.com/in/diegopasaye/'><Image src='/linkedin.svg' alt='Linkedin icon' width={25} height={25}/></a>
                <a href='mailto:pasayealvarado@gmail.com?subject=Hola%te%contacto%20por%20tu%20portafolio'><Image src='/gmail.svg' alt='Email icon' width={25} height={25}/></a>
            </div>
        </div>
    )
}