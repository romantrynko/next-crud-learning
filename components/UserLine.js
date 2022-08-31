import { useDispatch, useSelector } from 'react-redux';
import { toggleChangeAction } from '../redux/reducer';
import { BiEdit, BiTrashAlt } from 'react-icons/bi';

const UserLine = ({ id, name, avatar, email, salary, date, status }) => {
  const dispatch = useDispatch();
  const visible = useSelector((state) => state.app.client.toggleForm);


  const onUpdate = () => {
    dispatch(toggleChangeAction());
  };

  return (
    <tr className='border-b border-gray-300 '>
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
          <span
            className={`${
              status === 'Active' ? 'bg-green-500' : 'bg-rose-500'
            } text-white px-5 py-1 rounded-full`}
          >
            {status || 'Uknown'}
          </span>
        </button>
      </td>
      <td className="px-16 py-2 flex justify-around gap-5">
        <button className="cursor" onClick={onUpdate}>
          <BiEdit size={25} color="rgb(34,197,94)" />
        </button>
        <button className="cursor">
          <BiTrashAlt size={25} color="red" />
        </button>
      </td>
    </tr>
  );
};

export default UserLine;
