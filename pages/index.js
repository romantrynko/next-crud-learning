import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { BiUserPlus } from 'react-icons/bi';
import { Table } from '../components/table';
import { deleteAction, toggleChangeAction } from '../redux/reducer';
import { deleteUser, getUsers } from '../lib/helper';
import { useQueryClient } from 'react-query';
import DeleteComponent from '../components/deleteComponent';
import Form from '../components/form';

export default function Home() {
  const visible = useSelector((state) => state.app.client.toggleForm);
  const deleteId = useSelector((state) => state.app.client.deleteId);
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const handler = () => {
    dispatch(toggleChangeAction());
  };

  const deleteHandler = async () => {
    if (deleteId) {
      await deleteUser(deleteId);
      await queryClient.prefetchQuery('users', getUsers);
      await dispatch(deleteAction(null));
    }
  };

  const cancelHandler = async () => {
    console.log('cancel');
    await dispatch(deleteAction(null));
  };

  return (
    <section>
      <Head>
        <title>CRUD App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-5">
        <h1 className="text-xl md:text-5xl text-center font-bold py-10">
          Employee Management
        </h1>

        <div className="container mx-auto flex justify-between py-5 border-b">
          <div className="left flex gap-3">
            <button
              onClick={handler}
              className="flex bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-indigo-200 hover:border-indigo-500 hover:text-indigo-700"
            >
              {!visible ? (
                <>
                  Add Employee
                  <span className="px-1">
                    <BiUserPlus size={23} />
                  </span>
                </>
              ) : (
                <>Close Form</>
              )}
            </button>
          </div>
          {/* delete confirm modal */}
          {deleteId ? DeleteComponent({ deleteHandler, cancelHandler }) : <></>}
        </div>
        <div className="container mx-auto py-6">
          {visible ? <Form /> : <></>}
        </div>

        <div className="container mx-auto">
          <Table />
        </div>
      </main>
    </section>
  );
}
