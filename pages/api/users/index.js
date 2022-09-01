import connectMongo from '../../../database/connection';
import {
  deleteUser,
  getUsers,
  postUser,
  putUser
} from '../../../database/controller';

const handler = async (req, res) => {
  connectMongo().catch(() =>
    res.status(405).json({ error: 'Error in the connection' })
  );

  const { method } = req;

  switch (method) {
    case 'GET':
      getUsers(req, res);
      // res.status(200).json({ method, name: 'GET Request' });
      break;
    case 'POST':
      postUser(req, res);
      // res.status(200).json({ method, name: 'POST Request' });
      break;
    case 'PUT':
      putUser(req, res);
      // res.status(200).json({ method, name: 'PUT Request' });
      break;
    case 'DELETE':
      // res.status(200).json({ method, name: 'DELETE Request' });
      deleteUser(req, res);
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
};

export default handler;
