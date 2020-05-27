import {network } from '../../config/Network';
const DsTinmoinhat = async (token) => {

  return fetch(`${network}/tintuc/tintucmoi.php`,
  {   
      method: 'GET',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          type: "cors",   
       },       
  })
  .then(res => res.json(
  ))

};
module.exports = DsTinmoinhat;
