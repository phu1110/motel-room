

import axios from 'axios';

const apiUrl = 'https://localhost:7139/api/User/get-user-with-id';

const getUserData = async () => {
  const userId = localStorage.getItem('userid');
  if (userId) {
    try {
      const fullUrl = `${apiUrl}?id=${userId}`;
      const response = await axios.get(fullUrl);
      return response.data;
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw error;
    }
  } else {
    console.error('userId is not available.');
    return null;
  }
};

export { getUserData };
