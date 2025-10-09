import Image from 'next/image'
import styles from './NavBar.module.css'

export default function NavBar() {
    return(
        <div className={styles.nav}>
            <div className={styles.bodyNav}>
                <h1>Diego Pasaye</h1>

                <h2>Software Engineer</h2>

                <p>Building beautiful and interactive experiences with clean, efficient code.</p>

                <div className={styles.sectionsLink}>
                    <div className={styles.sectionsLinkContainer}>
                        <div></div>
                        <a href="">HOME</a>
                    </div>
                    <div className={styles.sectionsLinkContainer}>
                        <div></div>
                        <a href="">ABOUT</a>
                    </div>
                    <div className={styles.sectionsLinkContainer}>
                        <div></div>
                        <a href="">PROJECTS</a>
                    </div>
                    <div className={styles.sectionsLinkContainer}>
                        <div></div>
                        <a href="">EXPERIENCE</a>
                    </div>
                    <div className={styles.sectionsLinkContainer}>
                        <div></div>
                        <a href="">CONTACT</a>
                    </div>
                </div>
            </div>

            <div className={styles.social}>
                <a href='https://github.com/DiegoPasaye'><Image src='/github.svg' alt='Github icon' width={25} height={25}/></a>
                <a href=''><Image src='/linkedin.svg' alt='Linkedin icon' width={25} height={25}/></a>
                <a href=''><Image src='/gmail.svg' alt='Email icon' width={25} height={25}/></a>
            </div>
        </div>
    )
}