import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
import YogaCarousel from './YogaCarousel';
import Carousel from 'react-bootstrap/Carousel';
interface ModalProps {
    name: string;
    description: string;
    images: object;
    isVisible: boolean;
}

export default function YogaModal({ name, description, images, isVisible }: ModalProps) {
    const [modalVisible, setModalVisible] = useState(isVisible);

    return (
      <div>
        <Modal
          title="Vertically centered modal dialog"
          centered
          visible={isVisible}
          onOk={() => setModalVisible(false)}
          onCancel={() => setModalVisible(false)}
        >
        <Carousel />
        </Modal>
      </div>
    );
}


