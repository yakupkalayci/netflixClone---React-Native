import {users} from '../usersData';

export const login = (username: string, password: string) => {
  let flag = false;
  users.forEach(user => {
    if (user.username === username && user.password === password) {
      flag = true;
    }
  });
  return flag;
};
