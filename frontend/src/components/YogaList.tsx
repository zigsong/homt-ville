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
import YogaModal from './YogaModal';

export default function YogaList() {
    const yogaList = useSelector((state: RootState) => state.yogaReducer.yogas)
    const dispatch = useDispatch();
    // const [yogaData, setYogaData] = useState(JSON.stringify(yogaList));
    // console.log(yogaList);
    const dataSet = Object.keys(yogaList).map(yoga => yogaList[yoga]);
    console.log(dataSet.map(yoga => yoga.name));

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

    return (
        <Fragment>
            <Title>HOMT-VILLE</Title>
            {dataSet.map(yoga => 
                <Card className={classes.root} style={{ margin: 20}}>
                    <CardActionArea>
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
                    <CardActions>
                    <Button size="small" color="primary">
                        Like
                    </Button>
                    <Button size="small" color="primary">
                        LET'S GO
                    </Button>
                    </CardActions>
                </Card>
            )}
        </Fragment>
    )
}

const Title = styled.h1`
    font-size: 2.5em;
    text-align: center;
    font-weight: 600;
    color: #1f3b51;
`;