
// import React from "react";

// const VideoCard=({info})=>{
//     console.log(info);
//     const {snippet,statistics}=info;
//     const {channelTitle,title,thumbnails}=snippet;
//     return (
//     <div className="p-2 m-2 w-72">
//         <img className="rounded-lg shadow-lg"
//         alt="thumnails"
//         src={thumbnails.medium.url}/>
//         <ul>
//             <li className="font-bold py-2">{title}</li>
//             <li>{channelTitle}</li>
//             <li>{statistics.viewCount}</li>
//         </ul>
//     </div>
//     );

// };

// export default VideoCard;


import React from 'react'

const VideoCard=({info})=>{
    console.log(info);
    const {snippet,statistics}=info;
    const {channelTitle,title,thumbnails}=snippet;
    return (
    <div className="p-2 m-2 w-72">
        <img className="rounded-lg shadow-lg"
        alt="thumnails"
        src={thumbnails.medium.url}/>
        <ul>
            <li className="font-bold py-2">{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount}</li>
        </ul>
    </div>
    );

};

export default VideoCard;