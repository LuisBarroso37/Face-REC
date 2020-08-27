import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, boxes }) => {
    return (
        <div className='center'>
            <div className='face-recognition'>
                <img id='input-image'
                    src={imageUrl} 
                    alt=''
                    width='500px'
                    height='auto' 
                />
                {
                    boxes.map(box => {
                        return <div key={box.topRow} className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
                    })
                }
            </div>
        </div>
    );
}

export default FaceRecognition;