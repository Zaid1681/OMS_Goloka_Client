// InterviewPage.js
import React, { useState, useEffect } from 'react';

const InterviewCard = ({ interview }) => {
  const formatTime = (timeString) => {
    return new Date(timeString).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="bg-white border w-70 sm:w-80 border-stroke rounded p-3 lg:w-75 md:w-60 mb-4 shadow-default dark:border-strokedark dark:bg-boxdark">
      <h2 className="text-2xl font-semibold mb-2">{capitalizeFirstLetter(interview.interviewType)}</h2>
      <p>
        <strong>Applicant Name:</strong> {interview.candidateName}
      </p>
      <p>
        <strong>Interviewer Name:</strong> {interview.interviewerName}
      </p>
      <p>
        <strong>Time Slot:</strong> {formatTime(interview.startTime)} - {formatTime(interview.endTime)}
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
        const response = await fetch('http://localhost:5000/api/getInterviews');
        const data = await response.json();
        setInterviews(data);
      } catch (error) {
        console.error('Error fetching interviews:', error);
      }
    };

    fetchInterviews();
  }, []);

  return (
    <div className="grid mt-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
      {interviews.map((interview) => (
        <InterviewCard key={interview._id} interview={interview} />
      ))}
    </div>
  );
};

export default InterviewPage;
