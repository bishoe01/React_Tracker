import React from 'react';
import VideoItem from '../video_item/video_item.jsx';
import styles from './video_list.module.css';

function VideoList({videos,onVideoClick ,display}) {
    return (
        <ul className={styles.videos}>
            {videos.map(video =>
                <VideoItem onVideoClick={onVideoClick} key={video.id} video={video} display={display}/>)}
        </ul>
    );
}

export default VideoList;