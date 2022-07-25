import React, { useState } from 'react'
import { marked } from 'marked'
import DOMPurify from 'dompurify';
import './App.css'

import { sampleText } from './sampleText'

const App = () => {

    const [markDownText, setMarkDownText] = useState(sampleText);

    const handleMarkDownTextChange = event => {
        setMarkDownText(event.target.value)
    }

    const renderMarkDownText = text => {
        return { __html: DOMPurify.sanitize(marked.parse(text)) }
    }

    return (
        <div className='container'>
            <div className='row g-5'>
                <div className='col-sm-6'>
                    <h2 className='text-start'>Markdown</h2>
                </div>
                <div className='col-sm-6'>
                    <h2 className='text-end'>Preview</h2>
                </div>
                <div className='col-sm-6'>
                    <textarea
                        onChange={handleMarkDownTextChange}
                        value={markDownText}
                        className='form-control h-100'
                    />
                </div>
                <div className='col-sm-6 shadow p-3 border rounded bg-light'>
                    <div dangerouslySetInnerHTML={renderMarkDownText(markDownText)}/>
                </div>
            </div>
        </div>
    );
}

export default App;
