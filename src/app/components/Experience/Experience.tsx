import styles from './Experience.module.css'

export default function Experience() {
    return(
        <div className={styles.experience} id='experience'>
            <h2 className='miniTittle'>EXPERIENCE</h2>

            <span className='tittle'>Work History</span>


            <div className={styles.experienceRoadMap}>
                <div className={styles.experienceBar}></div>

                <div className={styles.experienceInfo}>
                    <span className={styles.experienceTime}>2022-Present</span>
                    <h5>Senior Frontend Engineer</h5>
                    <h6>Tech Innovations Inc.</h6>

                    <p>Leading frontend development for enterprise SaaS platform. Architected component library used across 5+ products. Mentored junior developers and established best practices.</p>

                    <div>
                        <span>Java</span>
                        <span>Angular</span>
                        <span>MySQL</span>
                    </div>
                </div>
            </div>
        </div>
    )

}