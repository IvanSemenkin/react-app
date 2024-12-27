function Video(props) {
    const { title, chanelName, img } = props;
    return (
        <div className='video'>
            <img src={img} alt="" />
            <p className="video-img">{title}</p>
            <p>{chanelName}</p>
            <div className='video-footer'>
                <p>Лайки: 0</p>
                <button>Лайк</button>
            </div>
        </div>
    );
}

export default Video;