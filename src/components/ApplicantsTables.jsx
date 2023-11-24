import React, { useState } from 'react';
import { Table, Tag, Input, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import BrandOne from '../images/brand/brand-01.svg'; // Import other brand images as needed

const ApplicantsTables = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex, columnTitle) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div className="p-4">
        <Input
          placeholder={`Search ${columnTitle}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          className="mb-2"
        />
        <Space>
          <button
            onClick={() => handleReset(clearFilters)}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded mr-2"
          >
            Reset
          </button>
          <button
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            className="px-4 py-2 bg-primary text-white rounded"
          >
            OK
          </button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    render: (text) =>
      searchedColumn === dataIndex ? (
        <strong>{text}</strong>
      ) : (
        <span>{text}</span>
      ),
  });

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      ...getColumnSearchProps('name', 'Name'),
      className: 'bg-boxdark hover:bg-bodydark2 p-2.5 text-sm font-medium uppercase',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      defaultSortOrder: 'descend',
      className: 'bg-boxdark hover:bg-bodydark2 text-center p-2.5',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      ...getColumnSearchProps('role', 'Role'),
      className: 'bg-boxdark hover:bg-bodydark2 p-2.5 text-center',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      filters: [
        {
          text: 'Ongoing',
          value: 'Ongoing',
        },
        {
          text: 'New',
          value: 'New',
        },
        {
          text: 'Completed',
          value: 'Completed',
        },
      ],
      onFilter: (value, record) => record.status.indexOf(value) === 0,
      render: (status) => {
        let color = '';
        switch (status) {
          case 'Ongoing':
            color = 'blue';
            break;
          case 'New':
            color = 'green';
            break;
          case 'Completed':
            color = 'volcano';
            break;
          default:
            color = '';
        }
        return (
          <Tag color={color} key={status}>
            {status}
          </Tag>
        );
      },
      className: 'bg-boxdark p-2.5 text-center',
    },
    {
      title: 'Details',
      dataIndex: 'viewMore',
      render: (_, record) => (
        <button
          className="px-4 py-2 bg-primary hover:bg-body text-white rounded responsive-button"
          onClick={() => handleViewMore(record)}
        >
          View More
        </button>
      ),
      className: 'bg-boxdark p-2.5 text-center',
    },
  ];

  const handleViewMore = (record) => {
    // Implement logic to handle "View More" button click
    console.log('View More Clicked for:', record);
  };

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      role: 'Admin',
      status: 'Ongoing',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      role: 'Hiring Team',
      status: 'New',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      role: 'Technical Team',
      status: 'Completed',
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      role: 'Admin',
      status: 'Ongoing',
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default text-black dark:text-white dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <Table
        className='bg-boxdark  text-black dark:text-white'
        columns={columns}
        dataSource={data}
        onChange={onChange}
        // rowClassName={() => 'bg-boxdark hover:bg-bodydark2'}
        bordered
        scroll={{ x: true }}
      />
    </div>
  );
};

export default ApplicantsTables;
