import {network } from '../../config/Network';
const ListBlog = async (token) => {

  return fetch(`${network}/tintuc/danhsachtintuc.php`,
  {   
      method: 'GET',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          type: "cors",   
       },       
  })
  .then(res => res.json(
    console.log(res)
  ))

};
module.exports = ListBlog;
