import { AddUserForm } from './addUserForm';
import { UpdateUserForm } from './updateUserForm';

export const Form = () => {
  const flag = true;
  return <div>{flag ? <AddUserForm /> : <UpdateUserForm />}</div>;
};
