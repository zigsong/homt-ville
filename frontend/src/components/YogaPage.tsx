import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, RouteComponentProps } from 'react-router-dom';
import axios from 'axios';
import BaseLayout from './BaseLayout';

interface YogaPageProps {
    branch: string,
    match: any,
}

export default function YogaPage({ match }: YogaPageProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);
    const FETCH_URL = 'http://127.0.0.1:8000/yoga'

    const fetchData = () => {
        axios.get(`${FETCH_URL}/${match.params.branch}`)
        .then(response => console.log(response.data))
        .catch(error => console.log(error.response));
    }
    
    useEffect(() => {
        fetchData();
        console.log('video page');
    }, []);

    return (
        <Fragment>
            <div>Yoga Video Page</div>
            <div>match: {match.params.branch}</div>
            {/* <div>data: {data}</div> */}
        </Fragment>
    )
}

