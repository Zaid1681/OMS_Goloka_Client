import React, { useState, useEffect } from 'react';
import { DatePicker, Space } from 'antd';
import moment from 'moment';

const InterviewCard = ({ interview }) => {
  const formatTime = (timeString) => {
    return new Date(timeString).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const formatInterviewDate = (dateString) => {
    const interviewDate = moment(dateString);
    return interviewDate.format('MMMM D, YYYY'); // Adjust the format as needed
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="mb-4 w-70 rounded border border-stroke bg-white p-3 shadow-default dark:border-strokedark dark:bg-boxdark sm:w-80 md:w-60 lg:w-75">
      <h2 className="mb-2 text-2xl font-semibold">
        {capitalizeFirstLetter(interview.interviewType)}
      </h2>
      <p>
        <strong>Applicant Name:</strong> {interview.candidateName}
      </p>
      <p>
        <strong>Interviewer Name:</strong> {interview.interviewerName}
      </p>
      <p>
        <strong>Interview Date:</strong> {formatInterviewDate(interview.date)}
      </p>
      <p>
        <strong>Time Slot:</strong> {formatTime(interview.startTime)} -{' '}
        {formatTime(interview.endTime)}
      </p>
    </div>
  );
};

const InterviewPage = () => {
  const [interviews, setInterviews] = useState([]);
  const [selectedDate, setSelectedDate] = useState(moment()); // Default to today's date

  useEffect(() => {
    // Fetch interviews from your server
    const fetchInterviews = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/getInterviews');
        const data = await response.json();
        setInterviews(data);
      } catch (error) {
        console.error('Error fetching interviews:', error);
      }
    };

    fetchInterviews();
  }, []);

  const filterInterviewsByDate = (date) => {
    return interviews.filter((interview) => {
      const interviewDate = moment(interview.date);
      return interviewDate.isSame(date, 'day');
    });
  };

  const handleDateChange = (date) => {
    if (moment.isMoment(date)) {
      setSelectedDate(date);
    } else if (date && typeof date === 'object' && date.toDate) {
      // If it's an object with toDate method, assume it's a Date object
      setSelectedDate(moment(date.toDate()));
    } else {
      console.error('Invalid date:', date);
    }
  };

  const todayInterviews = filterInterviewsByDate(moment());
  const tomorrowInterviews = filterInterviewsByDate(moment().add(1, 'day'));
  const selectedDateInterviews = filterInterviewsByDate(selectedDate);

  return (
    <div className="mt-8">
      
      
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">Today's Interviews</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
          {todayInterviews.map((interview) => (
            <InterviewCard key={interview._id} interview={interview} />
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">Tomorrow's Interviews</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
          {tomorrowInterviews.map((interview) => (
            <InterviewCard key={interview._id} interview={interview} />
          ))}
        </div>
      </div>

      <h2 className="text-2xl font-semibold justify-center ml-100 mb-2 mt-5">Select a date</h2>
      <Space direction="vertical" size={12} style={{ justifyContent: 'flex-end' }}>
        <DatePicker placeholder='Select a Date' className="p-1 w-45 ml-100 text-lg" onChange={handleDateChange} defaultValue={moment()} />
      </Space>

      <div className="mt-8">
        <h2 className="text-2xl mb-4 font-semibold">Interviews</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
          {selectedDateInterviews.map((interview) => (
            <InterviewCard key={interview._id} interview={interview} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default InterviewPage;