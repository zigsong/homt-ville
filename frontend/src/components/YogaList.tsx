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

import BaseLayout from './BaseLayout';
// import YogaModal from './YogaModal';
// import YogaCarousel from './YogaCarousel'

export default function YogaList() {
    const yogaList = useSelector((state: RootState) => state.yogaReducer.yogas)
    const dispatch = useDispatch();
    // const dataSet = Object.keys(yogaList).map(yoga => yogaList[yoga]);
    
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

    const classes = useStyles()

    const API_URL = 'http://127.0.0.1:8000'

    const getYogaData = () => {
        axios.get(`${API_URL}/yoga`)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => console.log(error.response))
    }

    useEffect(() => {
        // getYogaData();
        dispatch(requestList());
        console.log(yogaList);
    }, [])

    // const cardClick = (name: string, description: string, images: []) => {
    //     setModalVisible(true);
    //     setModalInfo({
    //         name: name,
    //         description: description,
    //         images: images, 
    //     })
    // }

    return (
        <Fragment>
            <div>This is YogaList page</div>
            <CardContainer>
            {/* {dataSet.map(yoga =>             
                <Card className={classes.root} style={{ width: '300px', margin: 20, flexShrink: 0 }}>
                    <CardActionArea onClick={() => cardClick(yoga.name, yoga.description, yoga.branch_images.map((item: any) => item.images))}>
                        {
                            // dataSet ? 
                                <CardMedia
                                className={classes.media}
                                image={`${IMAGE_URL}/${yoga.image}`}
                                title="Yoga Image"
                                />
                            // : 
                            // <Spinner animation="border" />
                        }
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            {yoga.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            {yoga.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions style={{ display: 'flex', justifyContent: 'flex-end'}}>
                        <Button size="small" color="primary" style={{ flex: 'none'}}>
                            Like
                        </Button>
                        <Button size="small" color="primary" style={{ flex: 'none' }} onClick={() => cardClick(yoga.name, yoga.description, yoga.branch_images.map((item: any) => item.images))}>                          
                            LET'S GO
                        </Button> 
                    </CardActions>
                </Card>
            )} */}
            </CardContainer>

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
        </Fragment>
    )
}

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`
const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    // overflow: scroll;
`
