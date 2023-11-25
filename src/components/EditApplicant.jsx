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

  //   modal useState
  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <Space>
        <Button type="primary" onClick={showModal}>
          View More
        </Button>
      </Space>
      <Modal
        visible={open}
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
            <Button>Custom Button</Button>
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
                      {data?.status}
                    </p>
                  </div>
                  <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                    <div className="w-full xl:w-1/2">
                      <label className="mb-2.5 block text-black dark:text-white">
                        First name
                      </label>
                      <input
                        type="text"
                        defaultValue={data?.name}
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
                        defaultValue={data?.email}
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
                        defaultValue={data?.role}
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
                        defaultValue={data?.gender}
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
                        defaultValue={data?.dob}
                        disabled
                        placeholder="Select subject"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                    </div>
                  </div>
                  <div className="gap-20 lg:flex">
                    <div className="mb-4.5 w-full">
                      <label className="mb-2.5 block text-black dark:text-white">
                        Ongoing
                      </label>
                      <div className="relative z-20 w-full bg-transparent dark:bg-form-input">
                        <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                          <option defaultValue={data?.round} value="">
                            Type your subject
                          </option>
                          <option value="">Round -1 Ongoing </option>
                          <option value="">Round -2 Ongoing </option>
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
                    <div className="mb-4.5 w-full">
                      <label className="mb-2.5 block text-black dark:text-white">
                        Completed
                      </label>
                      <div className="relative z-20 w-full bg-transparent dark:bg-form-input">
                        <select
                          className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                          defaultValue={data?.round}
                        >
                          <option value="">Select</option>
                          <option value="">Round-1 Completed </option>
                          <option value="">Round-2 Complted</option>
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

                  <div className="mb-6">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Message
                    </label>
                    <textarea
                      rows={6}
                      placeholder="Type your message"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    ></textarea>
                  </div>

                  <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                    Send Message
                  </button>
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
