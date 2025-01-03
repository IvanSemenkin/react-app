import React, { useState } from 'react';
import './video.css';

function Video(props) {
    const { title, chanelName, img } = props;
    const [likesCount, setLikesCount] = useState(0);

    const increaseLikeByOne = () => {
        setLikesCount(likesCount + 1);
    }

    const decreaseLikeByOne = () => {
        setLikesCount(likesCount - 1);
    }

    return (
        <div className='video'>
            <img src={img} alt="" />
            <p className="video-img">{title}</p>
            <p>{chanelName}</p>
            <div className='video-footer'>
                <p>Лайки: {likesCount}</p>
                <button onClick={increaseLikeByOne}>Лайк</button>
                <button onClick={decreaseLikeByOne}>Удалить</button>
            </div>
        </div>
    );
}

export default Video;