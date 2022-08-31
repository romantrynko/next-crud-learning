import { BiBrush } from 'react-icons/bi';
import { useQuery } from 'react-query';
import { getUser } from '../lib/helper';

export const UpdateUserForm = ({ formId, formData, setFormData }) => {
  const { isLoading, isError, data, error } = useQuery(['users', formId], () =>
    getUser(formId)
  );

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error</div>;

  const { name, avatar, salary, date, email, status } = data;
  const [firstname, lastname] = name ? name.split(' ') : formData;

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (Object.keys(formData).length === 0) return console.log('Empty data');
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="grid lg:grid-cols-2 w-4/6 gap-4">
      <div className="input-type">
        <input
          onChange={setFormData}
          defaultValue={firstname}
          type="text"
          name="firstname"
          placeholder="First Name"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
        />
      </div>
      <div className="input-type">
        <input
          onChange={setFormData}
          defaultValue={lastname}
          type="text"
          name="lastname"
          placeholder="Last Name"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
        />
      </div>
      <div className="input-type">
        <input
          onChange={setFormData}
          defaultValue={email}
          type="text"
          name="email"
          placeholder="Email"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
        />
      </div>
      <div className="input-type">
        <input
          onChange={setFormData}
          defaultValue={salary}
          type="text"
          name="salary"
          placeholder="Salary"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
        />
      </div>

      <div className="input-type">
        <input
          onChange={setFormData}
          defaultValue={date}
          type="date"
          name="date"
          placeholder="Salary"
          className="border px-5 py-3 focus:outline-none rounded-md"
        />
      </div>

      <div className="flex gap-10 items-center">
        <div className="form-check">
          <input
            onChange={setFormData}
            defaultChecked={status == "Active"}
            type="radio"
            name="status"
            value="Active"
            id="radioDefault1"
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-gray-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          />
          <label htmlFor="radioDefault1" className="inline-block text-gray-800">
            Active
          </label>
        </div>
        <div className="form-check">
          <input
            onChange={setFormData}
            defaultChecked={status == "Inactive"}
            type="radio"
            name="status"
            value="Inactive"
            id="radioDefault2"
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-red-500 checked:border-gray-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          />
          <label htmlFor="radioDefault2" className="inline-block text-gray-800">
            Inactive
          </label>
        </div>
      </div>

      <button className="flex justify-center text-md w-2/6 bg-yellow-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-yellow-500 hover:text-yellow-500 ">
        Update
        <span className="px-1">
          <BiBrush size={24}></BiBrush>
        </span>
      </button>
    </form>
  );
};
