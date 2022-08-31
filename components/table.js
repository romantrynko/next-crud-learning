import { getUsers } from '../lib/helper';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import UserLine from './UserLine';

export const Table = () => {

  const { isLoading, error, data } = useQuery('users', getUsers);

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
          <UserLine {...item} key={index} />
        ))}
      </tbody>
    </table>
  );
};
