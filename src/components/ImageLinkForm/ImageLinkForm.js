import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
    return (
        <div>
            <p className='intro-text' >This Magic Brain will detect faces in your pictures. Give it a try.</p>
            <div className='center'>
                <div className='center form'>
                    <input className='url-input' type='text' onChange={onInputChange} />
                    <button className='submit' onClick={onSubmit}>Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;