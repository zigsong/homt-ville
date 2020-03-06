import React, { useEffect, useState, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
// import { Spinner } from 'react-bootstrap';
import styled from 'styled-components';
import { Modal } from 'antd';
import YogaModal from './YogaModal';
import YogaCarousel from './YogaCarousel'

export default function YogaList() {
    const yogaList = useSelector((state: RootState) => state.yogaReducer.yogas)
    const dispatch = useDispatch();
    const dataSet = Object.keys(yogaList).map(yoga => yogaList[yoga]);
    
    const [modalVisible, setModalVisible] = useState(false);
    const [modalInfo, setModalInfo] = useState({ name: "", description: "" , images: {} })

    const IMAGE_URL = 'http://127.0.0.1:8000/static' // 이미지 불러오기 너무 땜빵

    const useStyles = makeStyles({
        root: {
          maxWidth: 345,
        },
        media: {
          height: 140,
        },
    });

    const classes = useStyles()

    useEffect(() => {
        dispatch(requestList());
    }, [])

    const cardClick = (name: string, description: string, images: object) => {
        setModalVisible(true);
        setModalInfo({
            name: name,
            description: description,
            images: images, 
        })
    }

    return (
        <Fragment>
            <CardContainer>
            {dataSet.map(yoga => 
            
                <Card className={classes.root} style={{ margin: 20 }}>
                    <CardActionArea onClick={() => cardClick(yoga.name, yoga.description, yoga.images)}>
                        {
                            // dataSet ? 
                                <CardMedia
                                className={classes.media}
                                image={`${IMAGE_URL}/${yoga.images}`}
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
                        <Button size="small" color="primary" style={{ flex: 'none' }} onClick={() => cardClick(yoga.name, yoga.description, yoga.images)}>
                            LET'S GO
                        </Button> 
                    </CardActions>
                </Card>
            )}
            </CardContainer>

            <div>
                <Modal
                    title={modalInfo.name}
                    centered
                    visible={modalVisible}
                    onOk={() => setModalVisible(false)}
                    okText="START"
                    onCancel={() => setModalVisible(false)}
                >
                    <YogaCarousel images={modalInfo.images}/>
                </Modal>
            </div>
            {/* <YogaModal isVisible={modalVisible} name={modalInfo.name} description={modalInfo.description} images={modalInfo.images} /> */}
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
`