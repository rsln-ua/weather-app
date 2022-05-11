import React, {CSSProperties, useState} from 'react';
import {Card, Form, Input, Modal} from 'antd';
import {PlusCircleOutlined} from '@ant-design/icons';
import {useForm} from 'antd/lib/form/Form';

const modalTitle = 'Enter location name';
const errorMessage = 'Please enter location name';

const cardStyles: CSSProperties = {
  width: 300,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '34px',
  minHeight: '245px',
};

export interface TFormData {
  locationName: string;
}

export interface IProps {
  addLocation: (name: string) => Promise<void>;
}

export const AddLocation: React.FC<IProps> = ({addLocation}) => {
  const [form] = useForm<TFormData>();
  const [isShow, setIsShow] = useState<boolean>();

  const {validateFields, resetFields} = form;

  const showModal = () => {
    setIsShow(true);
  };
  const hideModal = () => {
    setIsShow(false);
  };

  const handleAddLocation = () => {
    validateFields()
      .then(({locationName}) => addLocation(locationName))
      .then(() => {
        resetFields();
        hideModal();
      });
  };

  return (
    <>
      <Card style={cardStyles}>
        <PlusCircleOutlined style={{cursor: 'pointer'}} onClick={showModal} />
      </Card>
      <Modal title={modalTitle} onOk={handleAddLocation} onCancel={hideModal} visible={isShow}>
        <Form form={form} onFinish={handleAddLocation}>
          <Form.Item name="locationName" rules={[{required: true, message: errorMessage}]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
