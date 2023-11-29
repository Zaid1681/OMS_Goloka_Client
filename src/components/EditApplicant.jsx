import React, { useState } from 'react';
// import { Button, Modal, Space } from 'antd';
import { PlusOutlined, SortAscendingOutlined } from '@ant-design/icons';
import {
  Button,
  Cascader,
  Checkbox,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
  //   Button,
  Modal,
  Space,
} from 'antd';
import './Modal.css';
const EditApplicant = ({ data }) => {
  const [open, setOpen] = useState(false);
  // console.log(data?.remark1);
  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setOpen(false);
  };

  const { RangePicker } = DatePicker;
  const { TextArea } = Input;
  //   ===== form details code
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  const [componentDisabled, setComponentDisabled] = useState(true);
  const [disabled, setDisabled] = useState(true);

  const [firstRemark, setfirstRemark] = useState(data?.Remark1 || ''); // Use data.remark1 as initial value
  const [secondRemark, setsecondRemark] = useState(data?.Remark2 || ''); // Use data.remark1 as initial value
  const [selectedStatus, setselectedStatus] = useState(data?.Status || ''); // Use data.remark1 as initial value

  //   modal useState
  const handleCancel = () => {
    setOpen(false);
  };

  const onChangeRemark1 = (event) => {
    setfirstRemark(event.target.value); // Update the state with the new textarea value
  };
  const onChangeRemark2 = (event) => {
    setsecondRemark(event.target.value);

    // Any other logic you might want to perform on change
  };
  const onChange = (e) => {
    e.preventDefault();
    console.log('checked = ', e.target.checked);
    setChecked(e.target.checked);
  };
  const toggleDisabled = (e) => {
    e.preventDefault();
    setDisabled(!disabled);
  };
  const isRejectedSelected = selectedStatus === 'Rejected';

  const handleChangeStatus = (event) => {
    setselectedStatus(event.target.value); // Update the state with the new selected value
    // Any other logic you might want to perform on change
  };
  return (
    <>
      <Space>
        <Button type="primary" onClick={showModal}>
          View More
        </Button>
      </Space>
      <Modal
        open={open}
        title="Applicant Details"
        onOk={handleOk}
        onCancel={handleCancel}
        // className="text-white"
        // style={{ color: '#ffff' }} // Adjust the width here
        width={1000}
        okButtonProps={{
          style: {
            // color: 'white',
            height: 'auto',
            fontSize: '14px',
            maxHeight: '100vh',
          },
        }}
        footer={(_, { OkBtn, CancelBtn }) => (
          <>
            <CancelBtn />
            <OkBtn />
          </>
        )}
      >
        {/* Your content here */}
        <div className="text-white">
          {/* < > */}

          <div className="flex flex-col gap-9 bg-transparent">
            {/* <!-- Contact Form --> */}
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-none dark:bg-transparent">
              <form action="#">
                <div className=" p-6.5">
                  {/* Row -1 */}
                  <div className="mb-3 flex">
                    <p className="text-[1.05rem]">Status :</p>
                    <p className="  color-green mx-2 border-x-2  px-2 text-center text-[1.05rem] ">
                      {' '}
                      {data?.Status}
                    </p>
                  </div>
                  <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                    <div className="w-full xl:w-1/2">
                      <label className="mb-2.5 block text-black dark:text-white">
                        First name
                      </label>
                      <input
                        type="text"
                        defaultValue={data?.Name}
                        disabled
                        placeholder="Enter your first name"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                    </div>
                    <div className="mb-4.5 w-full">
                      <label className="mb-2.5 block text-black dark:text-white">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        defaultValue={data?.Email}
                        disabled
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                    </div>
                  </div>
                  {/* Row -2 */}

                  <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                    <div className="mb-4.5">
                      <label className="mb-2.5 block text-black dark:text-white">
                        Role
                      </label>
                      <input
                        type="text"
                        defaultValue={data?.Role}
                        disabled
                        placeholder="Select subject"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                    </div>
                    <div className="mb-4.5">
                      <label className="mb-2.5 block text-black dark:text-white">
                        Gender
                      </label>
                      <input
                        type="text"
                        defaultValue={data?.Gender}
                        disabled
                        placeholder="Select subject"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                    </div>

                    <div className="mb-4.5">
                      <label className="mb-2.5 block text-black dark:text-white">
                        DOB
                      </label>
                      <input
                        type="text"
                        defaultValue={data?.Dob}
                        disabled
                        placeholder="Select subject"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                    </div>
                  </div>
                  <div className="gap-20 lg:flex">
                    <div className="mb-4.5 w-full">
                      <label className="mb-2.5 block text-black dark:text-white">
                        Status
                      </label>
                      <div className="relative z-20 w-full bg-transparent dark:bg-form-input">
                        <select
                          className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary "
                          value={selectedStatus} // Set value attribute to manage the selected value
                          onChange={handleChangeStatus}
                          disabled={isRejectedSelected}
                        >
                          <option value="">Select Status</option>
                          <option value="New">New</option>
                          <option value="Ongoing">Ongoing</option>
                          <option value="Selected">Selected</option>
                          <option value="Rejected">Rejected</option>
                        </select>
                        <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                          <svg
                            className="fill-current"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g opacity="0.8">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                                fill=""
                              ></path>
                            </g>
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className="mb-4.5 w-full">
                      <label className="mb-2.5 block text-black dark:text-white">
                        Rounds
                      </label>
                      <div className="relative z-20 w-full bg-transparent dark:bg-form-input">
                        <select
                          className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                          defaultValue={data?.Round}
                        >
                          <option value="">Select Rounds</option>
                          <option value="">Round-1 Scheduled</option>
                          <option value="">Round-1 Completed</option>
                          <option value="">Round-2 Scheduled</option>
                          <option value="">Round-2 Completed</option>
                          {/* <option value="">Canada</option> */}
                        </select>
                        <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                          <svg
                            className="fill-current"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g opacity="0.8">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                                fill=""
                              ></path>
                            </g>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* About you  */}
                  <div className="w-full">
                    {' '}
                    <label className="mb-2.5 block text-black dark:text-white">
                      About
                    </label>
                    <textarea
                      rows={6}
                      placeholder="Type your message"
                      defaultValue={data?.About}
                      disabled
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    ></textarea>
                  </div>

                  <div className="my-5">
                    {' '}
                    <div className="mx-auto flex gap-5">
                      {' '}
                      <label className="mb-2.5 block text-lg text-black dark:text-white">
                        Remark
                      </label>
                      <Button type="primary" onClick={toggleDisabled}>
                        {/* {disabled ? 'unedit' : 'edit} */}
                        {disabled ? 'Edit' : 'Lock'}
                      </Button>
                    </div>
                  </div>
                  <div className="mb-6 justify-between gap-18 lg:flex">
                    <div className="w-full">
                      {' '}
                      <label className="mb-2.5 block text-black dark:text-white">
                        Round -1
                      </label>
                      <textarea
                        rows={6}
                        placeholder="Type your remark"
                        defaultValue={data?.About}
                        disabled={disabled}
                        onChange={onChangeRemark1}
                        value={firstRemark}
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      ></textarea>
                      <Button href="/calendar" type="primary">
                        Schedule Round-1
                      </Button>
                    </div>
                    <div className="w-full">
                      <label className="mb-2.5 block text-black dark:text-white">
                        Round-2
                      </label>
                      <textarea
                        rows={6}
                        placeholder="Type your message"
                        disabled={disabled}
                        onChange={onChangeRemark2}
                        defaultValue={data?.Remark1}
                        value={secondRemark} // Use state value here
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      ></textarea>
                      <Button href="/calendar" type="primary">
                        Schedule Round-2
                      </Button>
                    </div>
                  </div>
                  {/* 
                  <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                    Send Message
                  </button> */}
                </div>
              </form>
            </div>
          </div>
          {/* </> */}
        </div>
      </Modal>
    </>
  );
};

export default EditApplicant;
