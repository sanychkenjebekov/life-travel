import React from 'react';
// import logo from '../../img/lifeLogo.jpg'
import logo2 from '../../img/logoWhite.jpg'
import {Link, NavLink} from "react-router-dom";
import {BsInstagram, BsTelegram, BsWhatsapp} from "react-icons/bs";
import {SiGmail} from "react-icons/si";
import {AiOutlineClose} from "react-icons/ai";

const Header = () => {

 const modal=()=>{
     const modalContact = document.querySelector('.modalContact')
     const modalBg = document.querySelector('.modalBg')
modalContact.style.display='block'
modalBg.style.display='block'
 }
 const close =()=>{
     const modalContact = document.querySelector('.modalContact')
     const modalBg = document.querySelector('.modalBg')
     modalContact.style.display='none'
     modalBg.style.display='none'
 }
 const spans=(e)=>{
const p1 = document.querySelector('.p1')
const p2 = document.querySelector('.p2')
const p3 = document.querySelector('.p3')
const burger = document.querySelector('.burger')
     if(!e.target.classList.contains('active')){
         e.target.classList.add('active')
         p3.style.transform='rotate(48deg)'
         p3.style.margin='-3px 0 0 0'
         p2.style.transform='rotate(-48deg)'
         p2.style.margin='9px 0 0 0'
         p1.style.opacity='0'
         burger.style.transform='translateX(0)'
     }else {
         e.target.classList.remove('active')
         p3.style.transform='rotate(0)'
         p3.style.margin='5px 0'
         p2.style.transform='rotate(0)'
         p2.style.margin='5px 0'
         p1.style.opacity='1'
         burger.style.transform='translateX(100%)'
     }

    }
    return (
        <div id='header'>
            <div className="container">
                <div className="header">
                    <Link to={'/'}><div className="header--logo">
                        <img src={logo2} alt=""/>
                        <h1>life travel</h1>
                    </div></Link>
                    <div className="header--menu">
                        <NavLink to={'/'}>Главная</NavLink>
                        <NavLink to={'/туры и направление'}>Туры и направление</NavLink>
                        <NavLink to={'/оНас'}>О нас</NavLink>
                        <NavLink to={'/галерея'}>Галерея</NavLink>
                    </div>
                        <button onClick={modal}>Контакты</button>
                </div>
                <div className="modalBg"></div>
                <div className="modalContact">
                    <AiOutlineClose className='close' onClick={close}/>
                    <h1>Наши контакты</h1>
                    <div className="modalContact--card">
                        <a href="https://wa.me/+996707411142"><BsWhatsapp className='modalWhat'/>+996 (707) 411 142</a>
                        <a href="https://www.instagram.com/life_travelkg/?igshid=YmMyMTA2M2Y%3D"><BsInstagram className='modalInst'/>life_travelkg</a>
                        <a href="https://t.me/+996707411142"><BsTelegram className='modalTg'/>+996 (707) 411 142</a>
                        <a href="/"><SiGmail className='modalGmail'/>life.travelkg@gmail.com</a>
                    </div>
                </div>
                <div className="spans" onClick={spans}>
                    <p className='p1'></p>
                    <p className='p2'></p>
                    <p className='p3'></p>
                </div>
                <div className="burger">
                    <div className="burger--menu">
                        <Link to={'/'}>Главная</Link>
                        <Link to={'/туры и направление'}>Туры и направление</Link>
                        <Link to={'/оНас'}>О нас</Link>
                        <Link to={'/галерея'}>Галерея</Link>
                        <button onClick={modal}>Контакты</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;