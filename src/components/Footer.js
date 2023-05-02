import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineArrowUp, AiOutlineTwitter, AiOutlineWhatsApp } from 'react-icons/ai'
import me from '../assets/me.jpg'

const Footer = () => {
  return (
    <footer>
        <div>
            <img src={me} alt="Abhishek kashyap" />
            <h2>Abhishek Kashyap</h2>
            <p>"Success is not final; failure is not fatal: It is the courage to continue that counts.”</p>
            <span>—APJ Abdul Kalam</span>
        </div>
        <aside>
            <h2>Get In Touch</h2>
            <article>
                <a href="https://www.linkedin.com/in/abhishek-kashyap-189ba8221/" target={"blank"}><AiFillLinkedin/></a>
                <a href="https://www.instagram.com/a_b_h_i_8763" target={"blank"}><AiFillInstagram/></a>
                <a href="https://github.com/kashyapabhi" target={"blank"}><AiFillGithub/></a>
                <a href="https://wa.me/+919170066771"><AiOutlineWhatsApp/></a>
                <a href="https://twitter.com/AbhiKashyap040"><AiOutlineTwitter/></a>
            </article>
        </aside>
        <a href="#home"><AiOutlineArrowUp/></a>
    </footer>
  )
}

export default Footer;