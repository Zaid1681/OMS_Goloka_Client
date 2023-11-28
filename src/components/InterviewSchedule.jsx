import React, { useState, useEffect } from 'react';
import {
  Form,
  Input,
  Button,
  DatePicker,
  TimePicker,
  Select,
  AutoComplete,
} from 'antd';
import { MailOutlined, ClockCircleOutlined } from '@ant-design/icons';

const { Option } = Select;

const InterviewScheduling = () => {
  const [form] = Form.useForm();
  const [originalCandidateOptions, setOriginalCandidateOptions] = useState([]);
  const [candidateOptions, setCandidateOptions] = useState([]);
  const [techTeamOptions, setTechTeamOptions] = useState([]);
  const [marketingTeamOptions, setMarketingTeamOptions] = useState([]);
  const [interviewerOptions, setInterviewerOptions] = useState([]);

  useEffect(() => {
    // Fetch candidate names for auto-suggestions from your server
    const fetchCandidateNames = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/applicants'); // Replace with your actual endpoint
        const data = await response.json();
        const options = data.map((candidate) => ({
          value: candidate.Name,
          email: candidate.Email,
        }));
        setOriginalCandidateOptions(options);
        setCandidateOptions(options);
      } catch (error) {
        console.error('Error fetching candidate names:', error);
      }
    };

    // Fetch technical team members for auto-suggestions
    const fetchTechTeamMembers = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/techTeam'); // Replace with your actual endpoint
        const data = await response.json();
        const techTeamMemberOptions = data.map((member) => ({
          value: member.name,
          email: member.email,
        }));
        setTechTeamOptions(techTeamMemberOptions);
      } catch (error) {
        console.error('Error fetching technical team members:', error);
      }
    };

    // Fetch marketing team members for auto-suggestions
    const fetchMarketingTeamMembers = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/marketingTeam'); // Replace with your actual endpoint
        const data = await response.json();
        const marketingTeamMemberOptions = data.map((member) => ({
          value: member.name,
          email: member.email,
        }));
        setMarketingTeamOptions(marketingTeamMemberOptions);
      } catch (error) {
        console.error('Error fetching marketing team members:', error);
      }
    };

    fetchCandidateNames();
    fetchTechTeamMembers();
    fetchMarketingTeamMembers();
  }, []);

  const onCandidateNameChange = (value) => {
    if (value === '') {
      // If the input is empty, reset candidate options to the original list
      setCandidateOptions(originalCandidateOptions);
    } else {
      // Filter candidate options based on the input value
      const filteredOptions = originalCandidateOptions.filter((candidate) =>
        candidate.value.toLowerCase().includes(value.toLowerCase())
      );

      // Update the options in the AutoComplete
      setCandidateOptions(filteredOptions);

      // If there is only one candidate matching the filter, update the email field
      if (filteredOptions.length === 1) {
        form.setFieldsValue({ candidateEmail: filteredOptions[0].email });
      }
    }
  };

  const onInterviewTypeChange = (value) => {
    // Fetch the correct team options based on the selected interview type
    let teamOptions;
    switch (value) {
      case 'technical':
        teamOptions = techTeamOptions;
        break;
      case 'marketing':
        teamOptions = marketingTeamOptions;
        break;
      default:
        teamOptions = [];
    }

    // Update the interviewer options state variable
    setInterviewerOptions(teamOptions);
  };

  const onInterviewerNameChange = (value) => {
    if (value === '') {
      // If the input is empty, reset interviewer options to the original list
      setInterviewerOptions([]);
    } else {
      // Filter interviewer options based on the input value
      const filteredOptions = interviewerOptions.filter((interviewer) =>
        interviewer.value.toLowerCase().includes(value.toLowerCase())
      );

      // Update the options in the AutoComplete
      setInterviewerOptions(filteredOptions);

      // If there is only one interviewer matching the filter, update the email field
      if (filteredOptions.length === 1) {
        form.setFieldsValue({ interviewerEmail: filteredOptions[0].email });
      }
    }
  };

  const onFinish = async (values) => {
    // Add logic to handle scheduling the interview and sending emails (e.g., API call).
    console.log(values);
    try {
      const response = await fetch('http://localhost:8000/api/interviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        console.log('Interview Scheduled successfully');
        // Clear the form after successful scheduling
        form.resetFields();
      } else {
        console.error('Failed to schedule interview:', response.statusText);
      }
    } catch (error) {
      console.error('Error scheduling interview:', error);
    }
  };

  return (
    <div className="mx-auto max-w-md rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h1 className="mb-4 text-2xl font-semibold">Schedule an Interview</h1>
      <Form form={form} onFinish={onFinish} className="interview-form">
        <h1 className="my-1 text-black dark:text-white">Candidate Name</h1>
        <Form.Item name="candidateName" wrapperCol={{ span: 24 }}>
          <AutoComplete
            options={candidateOptions}
            onChange={(value) => onCandidateNameChange(value)}
            placeholder="Type candidate name"
          />
        </Form.Item>

        <h1 className="my-1 text-black dark:text-white">Interview Team</h1>
        <Form.Item name="interviewType" wrapperCol={{ span: 24 }}>
          <Select onChange={onInterviewTypeChange}>
            <Option value="technical">Technical Team</Option>
            <Option value="marketing">Marketing Team</Option>
          </Select>
        </Form.Item>

        <h1 className="my-1 text-black dark:text-white">Interviewer Name</h1>
        <Form.Item name="interviewerName" wrapperCol={{ span: 24 }}>
          <AutoComplete
            options={interviewerOptions} // Use the appropriate team options
            onChange={(value) => onInterviewerNameChange(value)}
            placeholder="Type interviewer name"
          />
        </Form.Item>

        <h1 className="my-1 text-black dark:text-white">Date</h1>
        <Form.Item name="date" wrapperCol={{ span: 24 }}>
          <DatePicker className="w-full" />
        </Form.Item>

        <div className="my-1 flex">
          <div className="w-1/2 pr-2">
            <h1 className="text-black dark:text-white">Starting Time</h1>
            <Form.Item name="startTime" wrapperCol={{ span: 24 }}>
              <TimePicker
                prefix={<ClockCircleOutlined />}
                placeholder="Select starting time"
                format="HH:mm"
                className="w-full "
                minuteStep={15}
              />
            </Form.Item>
          </div>
          <div className="w-1/2 pl-2">
            <h1 className="text-black dark:text-white">Ending Time</h1>
            <Form.Item name="endTime" wrapperCol={{ span: 24 }}>
              <TimePicker
                prefix={<ClockCircleOutlined />}
                placeholder="Select ending time"
                format="HH:mm"
                minuteStep={15}
                className="w-full"
              />
            </Form.Item>
          </div>
        </div>

        <h1 className="my-1 text-black dark:text-white">Candidate Email</h1>
        <Form.Item name="candidateEmail" wrapperCol={{ span: 24 }}>
          <Input type="email" />
        </Form.Item>

        <h1 className="my-1 text-black dark:text-white">Interviewer Email</h1>
        <Form.Item name="interviewerEmail" wrapperCol={{ span: 24 }}>
          <Input type="email" />
        </Form.Item>

        <Form.Item wrapperCol={{ span: 24 }}>
          <Button
            type="primary"
            htmlType="submit"
            icon={<MailOutlined />}
            className="w-full"
          >
            Schedule Interview and Send Emails
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default InterviewScheduling;
