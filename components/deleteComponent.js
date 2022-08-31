import { BiCheck, BiX } from 'react-icons/bi';

const DeleteComponent = ({ deleteHandler, cancelHandler }) => {
  return (
    <div className="flex gap-5">
      <button>Are you sure</button>
      <button
        onClick={deleteHandler}
        className="flex bg-red-500 text-white px-4 py-2 border rounded-md hover:bg-rose-200 border-red-500 hover:text-red-500"
      >
        Yes
        <span className="px-1">
          <BiX size={25} />
        </span>
      </button>
      <button
        onClick={cancelHandler}
        className="flex bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-green-200 border-green-500 hover:text-green-500"
      >
        No
        <span className="px-1">
          <BiCheck size={25} />
        </span>
      </button>
    </div>
  );
};

export default DeleteComponent;
