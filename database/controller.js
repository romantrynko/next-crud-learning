import Users from '../model/user';

// get: http://localhost:3000/api/users
export const getUsers = async (req, res) => {
  try {
    const users = await Users.find({});

    if (!users) return res.status(404).json({ error: 'Data not found' });
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ error: 'Error while fetching data' });
  }
};

// get: http://localhost:3000/api/users/1
export const getUser = async (req, res) => {
  try {
    const { userId } = req.query;
    if (userId) {
      const user = await Users.findById(userId);
      res.status(200).json(user);
    }
    res.status(404).json({ error: 'User not found' });
  } catch (error) {
    res.status(404).json({ error: 'Can not get the user!' });
  }
};

// post: http://localhost:3000/api/users
export async function postUsers(req, res) {
  try {
    const formData = req.body;
    if (!formData)
      return res.status(404).json({ error: 'Form Data Not Provided!' });
    Users.create(formData, (err, data) => {
      return res.status(200).json(data);
    });
  } catch (error) {
    res.status(404).json({ error });
  }
}

// put: http://localhost:3000/api/users/1
export async function putUser(req, res) {
  try {
    const { userId } = req.query;
    const formData = req.body;

    if (userId && formData) {
      const user = await Users.findByIdAndUpdate(userId, formData);
      res.status(200).json(user);
    }
    res.status(404).json({ error: 'User is not selected' });
  } catch (error) {
    res.status(404).json({ error: 'Error while updating the Data!' });
  }
}

// delete: http://localhost:3000/api/users/1

export async function deleteUser(req, res) {
  try {
    const { userId } = req.query;

    if (userId) {
      await Users.findByIdAndDelete(userId);
      return res.status(200).json({ deleted: userId });
    }

    res.status(404).json({ error: 'User is not selected' });
  } catch (error) {
    res.status(404).json({ error: 'Error while deleting user' });
  }
}
