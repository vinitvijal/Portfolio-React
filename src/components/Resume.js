import React, { useEffect, useState } from 'react';
import pdf from '../asset/VINEET.pdf'
import { Document, Page } from 'react-pdf'

const Resume = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

    return (
        <div id='resume'>
            <section>
                <div>
                    <Document file={pdf}>
                        <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6}/>
                    </Document>
                </div>
                <div></div>
            </section>
        </div>
    );
}

export default Resume;
