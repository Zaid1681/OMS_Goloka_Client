// InterviewPage.js
import React, { useState, useEffect } from 'react';

const InterviewCard = ({ interview }) => {
  const formatTime = (timeString) => {
    return new Date(timeString).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
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
        <strong>Time Slot:</strong> {formatTime(interview.startTime)} -{' '}
        {formatTime(interview.endTime)}
      </p>
    </div>
  );
};

const InterviewPage = () => {
  const [interviews, setInterviews] = useState([]);

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

  return (
    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
      {interviews.map((interview) => (
        <InterviewCard key={interview._id} interview={interview} />
      ))}
    </div>
  );
};

export default InterviewPage;