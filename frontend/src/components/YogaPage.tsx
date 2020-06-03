import React, { Fragment, useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, RouteComponentProps } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '../reducers/index';
// import { requestVideos } from '../actions/videoAction';
// import axios from 'axios';
// import BaseLayout from './BaseLayout';
// import { Select } from 'antd';

interface YogaPageProps {
    branch: string,
    match: any,
}

export default function YogaPage({ match }: YogaPageProps) {
//     const videoData = useSelector((state: RootState) => state.videoReducer.videos)
//     const dispatch = useDispatch();

//     const [isLoading, setIsLoading] = useState(false);
//     const [yogaData, setYogaData] = useState(null || {});
//     const [videoList, setVideoList] = useState([]);
    
//     const { Option } = Select;

//     const handleChange = (value: any) => {
//         console.log(`selected ${value}`);
//     };

//     const updateVideos = async () => {
//         // axios.get(`http://127.0.0.1:8000/yoga/${match.params.branch}/videos/get_youtube_data/`)
//         // .then(response => {
//         //     setVideoList(response.data);
//         // });
//         dispatch(requestVideos(match.params.branch));
//         console.log(videoData);
//     };

    // return (
//         <Fragment>
//             <div>Yoga Video Page</div>
//             <div>match: {match.params.branch}</div>
//             {/* <div>data: {data}</div> */}
//             {/* { yogaData != null &&
//                 axios.get()} */}
//             <div style={{ display: 'flex', flexDirection: 'row' }}>
//                 <div>Level</div>
//                 <Select defaultValue="easy" style={{ width: 120 }} onChange={handleChange}>
//                     <Option value="easy">초급</Option>
//                     <Option value="normal">중급</Option>
//                     <Option value="hard">고급</Option>
//                 </Select>
//                 <div>Runtime</div>
//                 <Select defaultValue="short" style={{ width: 120 }} onChange={handleChange}>
//                     <Option value="short">15분 미만</Option>
//                     <Option value="medium">15~30분</Option>
//                     <Option value="long">30분 이상</Option>
//                 </Select>
//                 <button onClick={updateVideos}>비디오 업데이트</button>
//             </div>
//             { videoList.map(videoId => 
//                 <iframe
//                     width="560"
//                     height="315" 
//                     src={`https://www.youtube.com/embed/${videoId}`}
//                     frameBorder="0" 
//                     allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
//                     allowFullScreen>
//                 </iframe>
//             )}
            
        
//         </Fragment>
    // )
}

