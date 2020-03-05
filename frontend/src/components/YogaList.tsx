import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../reducers/index';
import { requestList } from '../actions/yogaAction';
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons'; 
import YogaModal from './YogaModal';

export default function YogaList() {
    const yogaList = useSelector((state: RootState) => state.yogaReducer.yogas)
    const dispatch = useDispatch();
    // const [yogaData, setYogaData] = useState(JSON.stringify(yogaList));
    // console.log(yogaList);
    const dataSet = Object.keys(yogaList).map(yoga => yogaList[yoga]);
    console.log(dataSet.map(yoga => yoga.name));

    const { Meta } = Card;
    const IMAGE_API = 'http://127.0.0.1:8000/static' // 이미지 불러오기 너무 땜빵

    useEffect(() => {
        dispatch(requestList());
    }, [])

    return (
        <div>
            {/* {yogaList ? "yes" : "loading yet"} */}
            {/* {dataSet.map(yoga => <div>{yoga.name}</div>)} */}
            {dataSet.map(yoga => 
                <Card
                    style={{ width: 400 }}
                    cover={
                        <img
                            alt={yoga.name}
                            src={`${IMAGE_API}/${yoga.name}_1.jpg`}
                        />
                    }
                    actions={[
                        <SettingOutlined key="setting" />,
                        <EditOutlined key="edit" />,
                        <EllipsisOutlined key="ellipsis" />,
                    ]}
                >
                    <Meta
                        title={yoga.name}
                        description={yoga.decription}
                    />
                </Card>
            )}
        </div>
    )
}