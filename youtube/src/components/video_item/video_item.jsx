import React, { memo, useEffect } from 'react';
import styles from './video_item.module.css';
const VideoItem = memo(
    ({ video, display,video: { snippet },onVideoClick }) => {
    const displayType = display === 'list' ? styles.list : styles.grid;
    useEffect(() => {
        console.log('effect');
    },[])
    return (
        <li className={`${styles.container} ${displayType}`} onClick={() => onVideoClick(video)}>
            <div className={styles.video}>
                <img className={styles.thumbnail} src={snippet.thumbnails.medium.url} alt="Thumbnail" />
                <div className={styles.metadata}>
                    <p className={styles.title} >{snippet.title}</p>
                    <p className={styles.channel}>{snippet.channelTitle}</p>
                </div>
            </div>

        </li>
    );
}
);
export default VideoItem;