import Image from 'next/image'
import styles from './Projects.module.css'

export default function Projects() {
    return(
        <div className={styles.projects}>
            <h2 className='miniTittle'>PORTFOLIO</h2>

            <span className='tittle'>Featured Projects</span>

            <p className={styles.description}>A selection of projects that showcase my skills in frontend development, UI/UX design, and full-stack engineering.</p>

            <section className={styles.projectsCards}>
                <div className={styles.individualProjectCard}>
                    <Image src='/nakaweProject.png' alt='Project image' width={500} height={400}/>
                    <div className={styles.projectCardBody}>
                        <span>Entrega-recepcion de la contraloría de Morelia</span>
                        <p>A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.</p>

                        <div className={styles.projectsCardsTools}>
                            <span>AngularJs</span>
                            <span>MySQL</span>
                            <span>Java</span>
                        </div>

                        <button>Demo</button>
                    </div>
                </div>
            </section>
        </div>
    )
}