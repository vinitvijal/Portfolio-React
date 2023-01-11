import React, {  } from 'react';
import ProgrammerSVG from '../asset/home-main.svg'
import { Typewriter } from 'react-simple-typewriter'
import homebg from '../asset/home-bg.jpg'
import linkedin from '../asset/linkedin.svg'
import youtube from '../asset/youtube.svg'
import instagram from '../asset/instagram.svg'
import myphoto from '../asset/my-photo.jpg'
import Tilt from 'react-parallax-tilt';




const Home = () => {




    return (
        <>
   

        <div className='Home' id="starshine">
            <section id='Intro' className='template shine'>
                <div className="text-zone">
                    <div className="fixed-text-zone">
                        <h1>Hi There <span>👋</span></h1>
                        <h1>I'M <span style={{'color':'rgb(20, 255, 192'}}>VINIT VIJAL</span></h1>
                    </div>
                    <div className="typewriter-div">
                        <h1 id='typewriter'>
                            <Typewriter  autoStart={true} loop={true} deleteSpeed={50} words={['Python, C++ Learner','ReactJS Developer']} cursor cursorStyle='|'/>
                        </h1>
                    </div>
                   
                </div>
                <div className="svg-zone">
                    <img src={ProgrammerSVG} alt='Vinu'/>
                </div>
                <img src={homebg} alt=""  id='homebg'/>
            </section>

            <section id="personalIntro" className='displayflex jc-space-evenly alignitem flexcolumn'  style={{'width':'100%', 'height':'90vh'}}>
                <div style={{'height':'10%', 'width':'96%', 'fontSize':'1.5em'}} className='displayflex jc-center alignitem'>
                    <h1>About Me...</h1>
                </div>
                <div className='displayflex jc-space-evenly alignitem ' style={{'width':'96%', 'height':'84%'}}>
                    <div style={{'width':'70%','height':'96%'}} className='displayflex jc-space-evenly alignitem flexcolumn '>
                        <div style={{'width':'96%','height':'10%','display':'flex','alignItems':'center','paddingLeft':'5%',fontSize:'1.5em'}}>
                        <h1><Typewriter   autoStart={true} loop={true}  words={['LET ME INTRODUCE MYSELF...']}/></h1>
                        </div>
                        <div style={{'width':'96%','height':'84%', 'paddingLeft':'5%', }} className='displayflex alignitem'>
                            <h4 style={{'width':'80%', 'fontSize':'1.5em', 'lineHeight':'1.5em'}}>My name is <span color='#222'>Vinit</span>  (Vinu) and I am currently pursuing my BSC in Computer Science Hons from Shaheed Sukhdev College of Business Studies (SSCBS) at Delhi University. My passion for coding and technology is evident in my love for programming languages such as Python, Javascript, and C++. I have gained experience working with various frameworks and technologies such as React js, Node js, Django, MongoDB, and MySQL. I am always eager to learn new languages and technologies to improve my skills and enhance my understanding of the ever-evolving world of computer science. </h4>
                        </div>
                    </div>
                    <div style={{'width':'24%','height':'96%'}}  className='displayflex jc-center alignitem'>
                        <Tilt glarePosition={'all'} glareBorderRadius={'30px'} glareEnable={true} glareColor={'#fff'} style={{'width':'96%','height':'86%','border':'1px solid white', borderRadius:'30px'}} className='tiltprofile displayflex jc-space-evenly alignitem flexcolumn' >
                            <div style={{'width':'96%','max-height':'50%'}} className='displayflex alignitem jc-center'>
                                <img src={myphoto} alt="myphoto" id='myphoto' />
                            </div>
                            <div  style={{'width':'96%','min-height':'22%'}}>
                                <h4 style={{textAlign:'center'}}>
                                    SSCBS’25/26 (BSc CS) | Tech Enthusiast | Programming | Photography | Python | ReactJS ❤️ | Express Node - Web Development | C++ | 99.2%ile in CUET
                                </h4>
                            </div>
                            <div  style={{'width':'96%','height':'20%'}} className='displayflex jc-space-evenly alignitem socialmedia'>
                            <img src={instagram} alt="insta" />
                            <img src={youtube} alt="insta" />
                            <img src={linkedin} alt="insta" />
                            </div>
                        </Tilt>
                    </div>
                </div>
            </section>
            
        </div>
        

        </>
    );
}

export default Home;
