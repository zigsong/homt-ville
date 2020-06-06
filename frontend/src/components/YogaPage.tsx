import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { RouteComponentProps, withRouter } from "react-router";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../reducers/index';
import { requestBranch } from '../actions/yogaAction';

import styled from 'styled-components';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

interface YogaPageProps {
    branch: string;

}

const antIcon = <LoadingOutlined style={{ fontSize: 72, marginBottom: 20, }} spin />;

function YogaPage({ match }: RouteComponentProps<YogaPageProps>) {
    const dataSet = useSelector((state: RootState) => state.branchReducer);
    const videoData = Object.values(dataSet);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestBranch(match.params.branch));
    }, []);

    // useEffect(() => {
    //     console.log(videoData);
    // }, [dataSet]);

    useEffect(() => {
        if(videoData.length === 10) {
            setLoading(false);
        }
    })

    return (
        <Fragment>
        { loading ? 
            <SpinContainer>
                <Spin indicator={antIcon} />
                <div>loading videos...</div>
            </SpinContainer>
            :
            <VideoContainer>
                { videoData.map(video => 
                    <VideoBox>
                        <iframe
                            width="480"
                            height="270"
                            src={`https://www.youtube.com/embed/${video.videoId}`}
                            frameBorder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                        </iframe>
                    </VideoBox>
                )}      
            </VideoContainer>
        }
        </Fragment>
    )
}

const VideoContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

const VideoBox = styled.div`
    margin: 30px;
`

const SpinContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 200px;
`

export default withRouter(YogaPage);