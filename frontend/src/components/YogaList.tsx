import React, { useEffect, useState, Fragment } from 'react';
import { BrowserRouter as Router, Link, Route, RouteComponentProps, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import history from '../history';
import axios from 'axios';
import { RootState } from '../reducers/index';
import { requestList } from '../actions/yogaAction';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Modal } from 'antd';
import styled from 'styled-components';

import './stylesheets/YogaList.css';
import BaseLayout from './BaseLayout';
// import YogaModal from './YogaModal';
// import YogaCarousel from './YogaCarousel'

export default function YogaList() {
    const yogaList = useSelector((state: RootState) => state.yogaReducer);
    const dataSet = Object.values(yogaList);
    const dispatch = useDispatch();
    
    const [modalVisible, setModalVisible] = useState(false);
    const [modalInfo, setModalInfo] = useState({ name: "", translate: "", description: "" , images: [] })

    const useStyles = makeStyles({
        root: {
          maxWidth: 345,
        },
        media: {
          height: 140,
        },
    });
    
    const classes = useStyles();

    useEffect(() => {
        dispatch(requestList());
    }, [])

    useEffect(() => {
        // console.log(dataSet);
        // dataSet.map(branch => console.log(branch.images[0].image));
    }, [yogaList])

    // const cardClick = (name: string, description: string, images: []) => {
    //     setModalVisible(true);
    //     setModalInfo({
    //         name: name,
    //         description: description,
    //         images: images, 
    //     })
    // }

    const IMAGE_URL = 'http://127.0.0.1:8000'; 

    return (
        <Fragment>
            <CardContainer>
            {dataSet.map(branch => 
                <Card className={classes.root} style={{ width: '450px', height: 'auto', margin: '10px' }}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={`${IMAGE_URL}${branch.images[0].image}`}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {branch.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {branch.description}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    LET'S GO
                    </Button>
                </CardActions>
                </Card>
            )}

            {/* <div>
                <Modal
                    title={modalInfo.name}
                    centered
                    visible={modalVisible}
                    onOk={() => history.push(`/yoga/${modalInfo.name}`)}
                    okText="START"
                    onCancel={() => setModalVisible(false)}
                    style={{ width: '700px' }}
                >
                    <YogaCarousel images={modalInfo.images}/>
                </Modal>
            </div> */}
            </CardContainer>
        </Fragment>
    )
}

const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`