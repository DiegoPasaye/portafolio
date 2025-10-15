import styles from './Experience.module.css'

export default function Experience() {
    return(
        <div className={styles.experience} id='experience'>
            <h2 className='miniTittle'>EXPERIENCE</h2>

            <span className='tittle'>Work History</span>


            <div className={styles.experienceRoadMap}>
                <div className={styles.experienceBar}></div>

                <div className={styles.experienceInfo}>
                    <span className={styles.experienceTime}>2025-Present</span>
                    <h5>Junior Frontend Engineer</h5>
                    <h6>Nakawé.</h6>

                    <p>Frontend development for the creation of a website benefiting Mexican artisans.</p>

                    <div>
                        <span>NextJs</span>
                        <span>MySQL</span>
                    </div>
                </div>
            </div>
            <div className={styles.experienceRoadMap}>
                <div className={styles.experienceBar}></div>

                <div className={styles.experienceInfo}>
                    <span className={styles.experienceTime}>2024-2024</span>
                    <h5>Junior Frontend Engineer</h5>
                    <h6>Contraloría Municipal de Morelia.</h6>

                    <p>Frontend development for the creation of a web project for the delivery-reception of the municipal comptroller´s department.</p>

                    <div>
                        <span>Angular</span>
                        <span>Spring boot</span>
                        <span>MySQL</span>
                    </div>
                </div>
            </div>
        </div>
    )

}
