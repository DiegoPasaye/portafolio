import Image from 'next/image'
import styles from './Projects.module.css'

export default function Projects() {
    return(
        <div className={styles.projects} id='projects'>
            <h2 className='miniTittle'>PORTFOLIO</h2>

            <span className='tittle'>Featured Projects</span>

            <p className={styles.description}>A selection of projects that showcase my skills in frontend development, UI/UX design, and full-stack engineering.</p>

            <section className={styles.projectsCards}>
                <div className={styles.individualProjectCard}>
                    <Image src='/nakaweProject.png' alt='Project image' width={500} height={400}/>
                    <div className={styles.projectCardBody}>
                        <span>Nakawé</span>
                        <p>A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.</p>

                        <div className={styles.projectsCardsTools}>
                            <span>NextJS</span>
                            <span>MySQL</span>
                        </div>

                        <button>Demo</button>
                    </div>
                </div>
                <div className={styles.individualProjectCard}>
                    <Image src='/pladiermoProject.jpeg' alt='Project image' width={500} height={400}/>
                    <div className={styles.projectCardBody}>
                        <span>Pladiermo</span>
                        <p>A web application designed to streamline the official handover process for the Municipal Comptroller´s Office of Morelia.</p>

                        <div className={styles.projectsCardsTools}>
                            <span>Angular</span>
                            <span>Spring boot</span>
                            <span>MySQL</span>
                        </div>

                        <button>Demo</button>
                    </div>
                </div>
            </section>
        </div>
    )
}