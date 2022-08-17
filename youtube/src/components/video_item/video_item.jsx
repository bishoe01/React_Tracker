import React from 'react';


function VideoItem(props) {
    return (
        <div>
            {props.video.snippet.title}
        </div>
    );
}
export default VideoItem;