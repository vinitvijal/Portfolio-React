import React, { useEffect, useState } from 'react';
import pdf from '../asset/VINEET.pdf'
import { Document, Page, pdfjs} from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


const Resume = () => {

    const resumeLink = 'https://github.com/vinitvijal/Portfolio-React/raw/6e0a6744a43b018ea4a5fb2efab00ac5dc874b15/src/asset/VINEET.pdf';

    
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

    return (
        <div id='resume'>
            <section>
                <div>
                    <Document file={resumeLink}>
                        <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6}/>
                    </Document>
                </div>
                <div></div>
            </section>
        </div>
    );
}

export default Resume;
