import { useEffect, useState } from 'react';
import { BiEdit, BiTrashAlt } from 'react-icons/bi';
// import data from '../database/data.json';
import { getUser } from '../lib/helper';
import { useQuery } from 'react-query';

export const Table = () => {
  // const [users, setUsers] = useState([]);

  const { isLoading, error, data } = useQuery('users', getUser);

  if (isLoading) return <div>Employee is loading</div>;
  if (error) return <div>Got Error {error}</div>;

  return (
    <table className="min-w-full table-auto">
      <thead>
        <tr className="bg-gray-800">
          <th className="px-16 py-2">
            <span className="text-gray-200">Name</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Email</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Salary</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Birthday</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Status</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Actions</span>
          </th>
        </tr>
      </thead>
      <tbody className="bg-gray-200">
        {data.map((item, index) => (
          <Tr {...item} key={index} />
        ))}
      </tbody>
    </table>
  );
};

const Tr = ({ id, name, avatar, email, salary, date, status }) => {
  return (
    <tr>
      <td className="px-16 py-2 flex flex-row items-center">
        <img src={avatar || '#'} alt="img" className="rounded-full" />
        <span className="text-center ml-2 font-semibold">
          {name || 'Uknown'}
        </span>
      </td>
      <td className="px-16 py-2 items-center">
        <span className="text-center ml-2 font-semibold">
          {email || 'Uknown'}
        </span>
      </td>
      <td className="px-16 py-2 items-center">
        <span className="text-center ml-2 font-semibold">
          {salary || 'Uknown'}
        </span>
      </td>
      <td className="px-16 py-2 items-center">
        <span className="text-center ml-2 font-semibold">
          {date || 'Uknown'}
        </span>
      </td>
      <td className="px-16 py-2 items-center">
        <button className="cursor">
          <span className="bg-green-500 text-white px-5 py-1 rounded-full">
            {status || 'Uknown'}
          </span>
        </button>
      </td>
      <td className="px-16 py-2 flex justify-around gap-5">
        <button className="cursor">
          <BiEdit size={25} color="rgb(34,197,94)" />
        </button>
        <button className="cursor">
          <BiTrashAlt size={25} color="red" />
        </button>
      </td>
    </tr>
  );
};
