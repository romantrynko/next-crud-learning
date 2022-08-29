import { BiEdit, BiTrashAlt } from 'react-icons/bi';

export const Table = () => {
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
        <tr>
          <td className="px-16 py-2 flex flex-row items-center">
            <img src="#" alt="" />
            <span className="text-center ml-2 font-semibold">Roman Trynko</span>
          </td>
          <td className="px-16 py-2 items-center">
            <span className="text-center ml-2 font-semibold">
              romantrynko@gmail.com
            </span>
          </td>
          <td className="px-16 py-2 items-center">
            <span className="text-center ml-2 font-semibold">$2000</span>
          </td>
          <td className="px-16 py-2 items-center">
            <span className="text-center ml-2 font-semibold">29.11.1988</span>
          </td>
          <td className="px-16 py-2 items-center">
            <button className="cursor">
              <span className="bg-green-500 text-white px-5 py-1 rounded-full">
                Active
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
      </tbody>
    </table>
  );
};
