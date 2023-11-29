import React, { useState } from 'react';
import axios from 'axios';
import { UploadOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import Swal from 'sweetalert2';

const Upload = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState(''); // State to hold the file name

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setFileName(selectedFile.name); // Update the file name when a file is selected
  };

  const handleFileUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);
    if (!file) {
      // Check if a file is selected before uploading
      alert('please select file first');
      message.error('Please select a file before uploading');
      return; // Stop further execution
    } else {
      try {
        const response = await axios.post(
          'http://localhost:8000/api/upload',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Data Added Sucessfully ',
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => {
          // navigate('/');
          window.location.reload();
        }, 3000);
        console.log('File uploaded successfully:', response.data);
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error uploading file:',
          text: 'Something went wrong!',
        });
        console.error('Error uploading file:', error);
      }
    }
  };

  return (
    <div>
      <label
        htmlFor="dropzone-file"
        className="border-gray-300 bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed"
      >
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
          <svg
            class="text-gray-500 dark:text-gray-400 mb-4 h-8 w-8"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p class="text-gray-500 dark:text-gray-400 mb-2 text-sm">
            <span class="font-semibold">Click to upload</span>
          </p>
          <p class="text-gray-500 dark:text-gray-400 text-xs">
            XLS file only (MAX. 800x400px)
          </p>
        </div>
        {/* ... other elements */}
        <p className="text-gray-500 dark:text-gray-400 mb-2 text-sm">
          {/* Display the file name */}
          {fileName ? (
            <span className="font-semibold">{fileName}</span>
          ) : (
            'No File Selected'
          )}
        </p>
        {/* ... other elements */}
      </label>
      <input
        id="dropzone-file"
        type="file"
        onChange={handleFileChange}
        className="hidden"
      />
      <div className="m-auto flex justify-center">
        <Button
          type="primary"
          className="my-10  w-100"
          icon={<UploadOutlined />}
          onClick={handleFileUpload}
        >
          Upload
        </Button>
      </div>
    </div>
  );
};

export default Upload;
