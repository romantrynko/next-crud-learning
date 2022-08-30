const BASE_URL = 'http://localhost:3000';

// get all users
export const getUsers = async () => {
  const response = await fetch(`${BASE_URL}/api/users/`);
  const json = await response.json();

  return json;
};

// get single users
export const getUser = async (userId) => {
  const response = await fetch(`${BASE_URL}/api/users/${userId}`);
  const json = await response.json();

  if (json) return json;
  return {};
};

// post/add new user
export const addUser = async (formData) => {
  try {
    const Options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(formData)
    };

    const response = await fetch(`${BASE_URL}/api/users`, Options);
    const json = await response.json();

    return json;
  } catch (error) {
    return error;
  }
};

// put/update user
export const updateUser = async (userId, formData) => {
  try {
    const Options = {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(formData)
    };

    const response = await fetch(`${BASE_URL}/api/users/${userId}`, Options);
    const json = await response.json();

    return json;
  } catch (error) {
    return error;
  }
};

// delete user
export const deleteUser = async (userId) => {
  try {
    const Options = {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    };

    const response = await fetch(`${BASE_URL}/api/users/${userId}`, Options);
    const json = await response.json();

    return json;
  } catch (error) {
    return error;
  }
};
