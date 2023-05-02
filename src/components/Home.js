import React, { useRef } from 'react'
import { animate, motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import { BsChevronDown } from 'react-icons/bs';
import cv from '../assets/abkresume.pdf'
import me from '../assets/me.jpg'

const Home = ({ratio}) => {
    const projectCount = useRef(null);
    const animationProjectCount = ()=>{
        animate(0,10,{
            duration:1,
            onUpdate:(v)=>projectCount.current.textContent = v.toFixed()
        })
    }

    const animations = {
        h1: {
            initial: {
                x: "-100%",
                opacity: 0,
            },
            whileInView: {
                x: 0,
                opacity: 1,
            },
        },
        button: {
            initial: {
                y: "-100%",
                opacity: 0,
            },
            whileInView: {
                y: 0,
                opacity: 1,
            },
        }
    }
    return (
        <div id='home'>
            <section>
                <div>
                    <motion.h1 {...animations.h1}>
                        Hi, I Am <br />Abhishek Kashyap
                    </motion.h1>

                    <Typewriter options={{
                        strings: ["A Developer", "A Designer", "A Creator"],
                        autoStart: true,
                        loop: true,
                        wrapperClassName: "typewriterpara",
                        cursor: "",
                    }} />

                    <div>
                        <a href="mailto:kashyapabk1234@gmail.com">Hire Me</a>
                        <a href={cv} download className='cv' >Download CV</a>

                    </div>

                    <article>
                    {/* whileInView={animationClientCount} ref={clientCount} */}
                        <p>
                        <span >Fresher</span>
                        </p>
                        <span>Software Engineer</span>
                    </article>

                    <aside>
                        <article>
                            <p>+
                            <motion.span whileInView={animationProjectCount} ref={projectCount}></motion.span>
                            </p>
                            <span>Projects Done</span>
                        </article>

                        <article data-special>
                           <p>Contact</p>
                           {/* <span>+91-8009215454<br /></span> */}
                            <span>kashyapabk1234@gmail.com</span>
                        </article>
                    </aside>

                </div>
            </section>
            <section>
                <img src={me} alt="abhishek" />
            </section>
            <BsChevronDown/>

        </div>
    )
}

export default Home