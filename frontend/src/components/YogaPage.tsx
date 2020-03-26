import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, RouteComponentProps } from 'react-router-dom';
import axios from 'axios';
import BaseLayout from './BaseLayout';
import { Select } from 'antd';

interface YogaPageProps {
    branch: string,
    match: any,
}

export default function YogaPage({ match }: YogaPageProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [yogaData, setYogaData] = useState(null || {});
    const FETCH_URL = 'http://127.0.0.1:8000/yoga';
    const YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/search';
    const { Option } = Select;

    const fetchData = () => {
        axios.get(`${FETCH_URL}/${match.params.branch}`)
        .then(response => setYogaData(response.data))
        .catch(error => console.log(error.response));
    }
    
    useEffect(() => {
        fetchData();
        console.log('video page');
    }, []);

    const handleChange = (value: any) => {
        console.log(`selected ${value}`);
    }
      
    return (
        <Fragment>
            <div>Yoga Video Page</div>
            <div>match: {match.params.branch}</div>
            {/* <div>data: {data}</div> */}
            {/* { yogaData != null &&
                axios.get()} */}
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div>Level</div>
                <Select defaultValue="easy" style={{ width: 120 }} onChange={handleChange}>
                    <Option value="easy">초급</Option>
                    <Option value="normal">중급</Option>
                    <Option value="hard">고급</Option>
                </Select>
                <div>Runtime</div>
                <Select defaultValue="short" style={{ width: 120 }} onChange={handleChange}>
                    <Option value="short">15분 미만</Option>
                    <Option value="medium">15~30분</Option>
                    <Option value="long">30분 이상</Option>
                </Select>
            </div>
            <iframe
                width="560"
                height="315" 
                src="https://www.youtube.com/embed/pD9U3jTIzkY" 
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
            </iframe>
        
        </Fragment>
    )
}

