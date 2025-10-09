import styles from './AboutMe.module.css'

export default function AboutMe() {
    return(
        <div className={styles.aboutMe}>
            <h2>ABOUT ME</h2>

            <span>Building the web, one pixel at a time</span>

            <p>I´m a software engineer with a passion for creating beautiful, intuitive user interfaces that solve real problems. My journey in web development started over 5 years ago, and I´ve been fortunate to work on diverse projects ranging from small startups to large enterprise applications. I believe that great software is built at the intersection of thoughtful design and robust engineering. Whether I´m architecting a complex frontend system or fine-tuning animations for the perfect user experience, I approach every project with attention to detail and a commitment to quality. When I´m not coding, you can find me exploring new technologies, contributing to open source projects, or sharing what I´ve learned with the developer community.</p>

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