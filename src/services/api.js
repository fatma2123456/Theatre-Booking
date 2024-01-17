import usersData from '../data/users.json';
import seatsData from '../data/users.json';



export const getUserByUsernameAndPassword = (username, password) => {
  return usersData.find(user => user.username === username && user.password === password);
};



export const getSeatAvailability = () => {
  return seatsData;
};

  