import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Particles from 'react-tsparticles';
import particlesOptions from "./configs/particles.json";

export default function Home() {
  return (
    <div className={styles.App}>
        <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Particles options={particlesOptions}/>
        <header className={styles.Appheader}>
            <h2>Hello, I'm <span className={styles.name}>Angelo Amadora</span>.<br/>I'm a full-stack web developer.</h2>
        </header>
        <div>
           
        </div>
    </div>
    // <div>
    //     <Head>
    //         <title>Create Next App</title>
    //         <link rel="icon" href="/favicon.ico" />
    //     </Head>
        
    //     <Particles
    //     id="tsparticles"
    //     options={{
    //       background: {
    //         color: {
    //           value: "#0d47a1",
    //         },
    //       },
    //       fpsLimit: 60,
    //       interactivity: {
    //         detectsOn: "canvas",
    //         events: {
    //           onClick: {
    //             enable: true,
    //             mode: "push",
    //           },
    //           onHover: {
    //             enable: true,
    //             mode: "repulse",
    //           },
    //           resize: true,
    //         },
    //         modes: {
    //           bubble: {
    //             distance: 400,
    //             duration: 2,
    //             opacity: 0.8,
    //             size: 40,
    //           },
    //           push: {
    //             quantity: 4,
    //           },
    //           repulse: {
    //             distance: 200,
    //             duration: 0.4,
    //           },
    //         },
    //       },
    //       particles: {
    //         color: {
    //           value: "#ffffff",
    //         },
    //         links: {
    //           color: "#ffffff",
    //           distance: 150,
    //           enable: true,
    //           opacity: 0.5,
    //           width: 1,
    //         },
    //         collisions: {
    //           enable: true,
    //         },
    //         move: {
    //           direction: "none",
    //           enable: true,
    //           outMode: "bounce",
    //           random: false,
    //           speed: 6,
    //           straight: false,
    //         },
    //         number: {
    //           density: {
    //             enable: true,
    //             value_area: 800,
    //           },
    //           value: 80,
    //         },
    //         opacity: {
    //           value: 0.5,
    //         },
    //         shape: {
    //           type: "circle",
    //         },
    //         size: {
    //           random: true,
    //           value: 5,
    //         },
    //       },
    //       detectRetina: true,
    //     }}
    //     height={'99vh'}
    //   />
   

    // </div>
  )
}
