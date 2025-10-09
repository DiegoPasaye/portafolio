import Image from 'next/image'
import styles from './Contact.module.css'

export default function Contact() {
    return(
        <div className={styles.contact} id='contact'>
            <h2 className='miniTittle'>GET IN TOUCH</h2>

            <span className='tittle'>Let´s Work Together</span>

            <p className='description'>I´m always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!</p>

            <div className={styles.contactSection}>
                <form action="">

                    <label htmlFor="">Name<input type="text" placeholder='Your name'/></label>
                    <label htmlFor="">Email<input type="text" placeholder='your.email@example.com' /></label>
                    <label htmlFor="">Message<input type="text" placeholder='Tell me about your proyect...'/></label>


                    <button>Send Message</button>
                </form>


                <div className={styles.contactExtraModule}>
                    <div className={styles.contactExtraModuleContainer}>
                        <Image src='/emailGray.svg' alt='Email icon' width={25} height={25}/>

                        <div>
                            <span>Email</span>

                            <p>pasayealvarado@gmail.com</p>
                        </div>
                    </div>
                    <div className={styles.contactExtraModuleContainer}>
                        <Image src='/locationGray.svg' alt='Location icon' width={25} height={25}/>

                        <div>
                            <span>Location</span>

                            <p>Remote / Available Worldwide</p>
                        </div>
                    </div>
                    <p className={styles.contactDifferentConnectText}>Prefer a different way to connect? Find me on social media or check out my work on GitHub.</p>
                </div>
            </div>

        </div>
    )
}