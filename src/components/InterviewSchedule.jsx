import React from 'react';
import { Form, Input, Button, DatePicker, TimePicker, Select } from 'antd';
import { MailOutlined, ClockCircleOutlined } from '@ant-design/icons';

const { Option } = Select;

const HrInterviewScheduling = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    // Add logic to handle scheduling the interview and sending emails (e.g., API call).
    console.log('Interview Scheduled:', values);
    // Clear the form after scheduling
    form.resetFields();
  };

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark max-w-md mx-auto sm:px-7.5 xl:pb-1">
      <h1 className="text-2xl font-semibold mb-4">Schedule an Interview</h1>
      <Form form={form} onFinish={onFinish} className="interview-form">
        <h1 className="text-black my-1 dark:text-white">Candidate Name</h1>
        <Form.Item
          name="candidateName"
          wrapperCol={{ span: 24 }}
        >
          <Input />
        </Form.Item>

        <h1 className="text-black my-1 dark:text-white">Interviewer Name</h1>
        <Form.Item
          name="interviewerName"
          wrapperCol={{ span: 24 }}
        >
          <Input />
        </Form.Item>

        <h1 className="text-black my-1 dark:text-white">Interview Type</h1>
        <Form.Item
          name="interviewType"
          wrapperCol={{ span: 24 }}
        >
          <Select>
            <Option value="technical">Technical Interview</Option>
            <Option value="ceo">CEO Interview</Option>
          </Select>
        </Form.Item>

        <h1 className="text-black my-1 dark:text-white">Date</h1>
        <Form.Item
          name="date"
          wrapperCol={{ span: 24 }}
        >
          <DatePicker 
            className='w-full'
          />
        </Form.Item>

        <div className="flex my-1">
          <div className="w-1/2 pr-2">
            <h1 className="text-black dark:text-white">Starting Time</h1>
            <Form.Item
              name="startTime"
              wrapperCol={{ span: 24 }}
            >
              <TimePicker
                prefix={<ClockCircleOutlined />}
                placeholder="Select starting time"
                format="HH:mm"
                className='w-full '
                minuteStep={15}
              />
            </Form.Item>
          </div>
          <div className="w-1/2 pl-2">
            <h1 className="text-black dark:text-white">Ending Time</h1>
            <Form.Item
              name="endTime"
              wrapperCol={{ span: 24 }}
            >
              <TimePicker
                prefix={<ClockCircleOutlined />}
                placeholder="Select ending time"
                format="HH:mm"
                minuteStep={15}
                className='w-full'
              />
            </Form.Item>
          </div>
        </div>

        <h1 className="text-black my-1 dark:text-white">Candidate Email</h1>
        <Form.Item
          name="candidateEmail"
          wrapperCol={{ span: 24 }}
        >
          <Input type="email" />
        </Form.Item>

        <h1 className="text-black my-1 dark:text-white">Interviewer Email</h1>
        <Form.Item
          name="interviewerEmail"
          wrapperCol={{ span: 24 }}
        >
          <Input type="email" />
        </Form.Item>

        <Form.Item wrapperCol={{ span: 24 }}>
          <Button type="primary" htmlType="submit" icon={<MailOutlined />} className="w-full">
            Schedule Interview and Send Emails
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default HrInterviewScheduling;
