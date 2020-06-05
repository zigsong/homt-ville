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
import { Carousel } from 'antd';
import styled from 'styled-components';

import './stylesheets/YogaList.css';
import BaseLayout from './BaseLayout';
import YogaCarousel from './YogaCarousel';

interface IBranch {
    name: string;
    translation: string;
    description: string;
    images: object[];
}

export default function YogaList() {
    const dataSet = useSelector((state: RootState) => state.yogaReducer);
    const yogaList = Object.values(dataSet);
    const dispatch = useDispatch();
    
    const [modalOpen, setModalOpen] = useState(false);
    const [modalData, setModalData] = useState<IBranch>({ name: "", translation: "", description: "", images: [] })

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
    }, [dataSet])

    const cardClick = (name: string, translation: string, description: string, images: object[]) => {
        setModalOpen(true);
        setModalData({
            name: name,
            translation: translation,
            description: description,
            images: images, 
        })
    }

    const IMAGE_URL = 'http://127.0.0.1:8000'; 

    return (
        <Fragment>
            <CardContainer>
            {yogaList.map(branch => 
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
                <CardActions style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button size="small" color="primary" onClick={() => cardClick(
                        branch.name,
                        branch.translation,
                        branch.description,
                        branch.images.map(item => item.image)
                    )}>
                        LET'S GO
                    </Button>
                </CardActions>
                </Card>
            )}

            <div>
                <Modal
                    title={modalData.name}
                    centered
                    visible={modalOpen}
                    onOk={() => history.push(`/yoga/${modalData.name}/videos`)}
                    okText="START"
                    onCancel={() => setModalOpen(false)}
                    style={{ width: '750px' }}
                >
                    <YogaCarousel images={modalData.images}/>
                    <h3>{ modalData.name }</h3>
                    <h4>{ modalData.translation }</h4>
                    <h5>{ modalData.description }</h5>
                </Modal>    
            </div>
            </CardContainer>
        </Fragment>
    )
}

const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`