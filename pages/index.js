import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Particles from 'react-particles-js';

export default function Home() {
  return (
    <div className={styles.mainBackgroundColor}>
        <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.welcome}>
            <h1>Hello, I'm Angelo Amadora.<br/>I'm a full-stack web developer.</h1>
        </div>
        <Particles 
                params={{
                    particles: {
                        number: {
                            value: 100,
                            density: {
                                enable: true,
                                value_area: 1000
                            }
                        },
                        color: {
                            value: '#fff'
                        },
                        opacity: {
                            value: 0.5,
                            anim: {
                                enable: true
                            }
                        },
                        size: {
                            value: 4,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 3
                            }
                        },
                        line_linked: {
                            enable: false
                        },
                        move: {
                            speed: 0.2
                        }
                    }    
                }}
                height={'100vh'}
            />
   

    </div>
  )
}
