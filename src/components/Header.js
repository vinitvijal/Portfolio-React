import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

const Header = () => {
    const [headerCode, setHeaderCode] = useState();
    const [headingH1, setHeadingH1] = useState();

    setInterval(()=>{
        const header = document.getElementById('header')
        const headerH1 = document.getElementById('headingH1')
        setHeaderCode(header)
        setHeadingH1(headerH1)
        
    }, 1000)
    try {
         window.addEventListener('scroll', function() {
        

        if (window.scrollY >= 40 && window.scrollY < 240){
          headerCode.style.backdropFilter = 'blur(10px)';
          headerCode.style.boxShadow = '0 -20px 15px 15px';
          headerCode.style.transition = '0.5s';
          headingH1.style.color = '#c770f0';
        }else if (window.scrollY >= 240){
            headingH1.style.color = 'white';
            headingH1.style.transition = '1s';
        } else{
          headerCode.style.backdropFilter = 'blur(0px)';
          headerCode.style.boxShadow = 'none';

        };
        
        });

    } catch (error) {
        console.log(error)
    }
   
        
   
   
    return (
        <header id='header'>

                <h1 id='headingH1'>
                   <Typewriter  autoStart={true} loop={5} deleteSpeed={100} words={['Code Vinu.']} />
                </h1>
            <nav>
                <Link to={'/'}>Home</Link>
                <Link to={'/'}>Projects</Link>
                <Link to={'/'}>About</Link>
                <Link to={'/'}>Contact</Link>
                <button>GitHub</button>
            </nav>

        </header>
    );
}

export default Header;
