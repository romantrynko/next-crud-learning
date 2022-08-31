import { AddUserForm } from './addUserForm';
import { UpdateUserForm } from './updateUserForm';
import { useSelector } from 'react-redux';

export const Form = () => {
  const visible = useSelector((state) => state.app.client.toggleForm);

  return <div>{!visible ? <AddUserForm /> : <UpdateUserForm />}</div>;
};
