import React from 'react';

import { Document, Page } from 'react-pdf'

const Resume = () => {
    return (
        <div id='resume'>
            <section>
                <div>
                    <Document file='./VINEET.pdf'>
                        <Page pageNumber={1} />
                    </Document>
                </div>
                <div></div>
            </section>
        </div>
    );
}

export default Resume;
