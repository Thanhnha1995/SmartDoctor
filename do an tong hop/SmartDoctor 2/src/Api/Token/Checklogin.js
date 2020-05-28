import {network } from '../../config/Network';
const checkLogin = (token) => (
  fetch(`${network}/nguoidung/ktdangnhap.php`,
  {   
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
      },
      body: JSON.stringify({ token })
  })
  .then(res => res.json())
);

module.exports = checkLogin;
