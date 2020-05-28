import {network } from '../../config/Network';

const LogIn= (email, matkhau) => (
    fetch(`${network}/nguoidung/dangnhap.php`,
    {   
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ email, matkhau })
    })
    .then(res => res.json())
  );
  
  module.exports = LogIn;
  