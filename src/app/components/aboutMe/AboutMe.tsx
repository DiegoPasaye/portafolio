import styles from './AboutMe.module.css'

export default function AboutMe() {
    return(
        <div className={styles.aboutMe} id='aboutMe'>
            <h2 className='miniTittle'>ABOUT ME</h2>

            <span className='tittle'>Building the web, one pixel at a time</span>

            <p className='description'>I am a software engineering student at the Universidad Tecnologica de Morelia, passionate about building beautiful and intuitive user interfaces that solve real-world problems. My journey in development started about four years ago, and I´ve spent the last eight months applying my skills to professional projects.

While I´m early in my career, I am a dedicated, self-taught learner who is always open to new challenges. I thrive in team environments and am eager to contribute to innovative projects. I believe great software is built where thoughtful design meets robust engineering, and I bring that mindset to every task, committed to quality and detail.</p>

            <h3>Technical Skills</h3>

            <div className={styles.aboutMeSkills}>
                <h4>FRONTEND</h4>

                <div>
                    <span>NextJs</span>
                    <span>HTML</span>
                    <span>AngularJs</span>
                    <span>Bootstrap</span>
                </div>

                <h4>BACKEND</h4>

                <div>
                    <span>NodeJs</span>
                    <span>Python</span>
                    <span>MongoDB</span>
                    <span>MySQL</span>
                </div>


                <h4>TOOLS</h4>

                <div>
                    <span>Git</span>
                    <span>Figma</span>
                    <span>VS Code</span>
                    <span>Jira</span>
                </div>
            </div>
        </div>
    )

}