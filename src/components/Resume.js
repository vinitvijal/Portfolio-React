import React from 'react';
import Resumepng from '../asset/VINEET.png'
import Resumepdf from '../asset/VINEET.pdf'
import Footer from './Footer';


const Resume = () => {

    
    return (
        <div id='resume'>
            <section>
                <div>
                    <h1 className='rainbow'>Resume</h1>
                    <img src={Resumepng} alt="pdf" style={{width: '60%'}} />
                </div>
                <div>
                    <h1><span className='rainbow'>Download Resume</span> 😇</h1>
                    <a href={Resumepdf} download target="__blank">
                        <h2>Resume</h2>
                    </a>
                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default Resume;
