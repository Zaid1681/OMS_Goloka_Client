import React, { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import InterviewScheduling from '../components/InterviewSchedule';
import InterviewDetails from '../components/InterviewDetails';
import { Modal, Button } from 'antd';

const Calendar = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <div style={{ top: 10, left: 10, zIndex: 999 }}>
        <Button type="primary" className="bg-primary" onClick={showModal}>
          Schedule an Interview
        </Button>
      </div>

      <InterviewDetails />
      {/* Other components or sections here */}

      <Modal
        title="Schedule an Interview"
        className="dark:bg-boxdark"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <InterviewScheduling onClose={handleCancel} />
      </Modal>
    </>
  );
};

export default Calendar;
