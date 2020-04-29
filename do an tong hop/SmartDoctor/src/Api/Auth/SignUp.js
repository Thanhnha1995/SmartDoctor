import {network } from '../../config/Network';
const Register= (
    hovaten,
	idgioitinh,
	ngaysinh,
	diachi,
	sodienthoai,
	nghenghiep,
	socmnd,
	masobnxh,
	cannang,
	chieucao,
	bmi,
	idnhommau,
	tinhtrangbenhly,
	diungvacacphanung,
	cachsudungthuoc,
	email,
	matkhau) => (
    fetch(`${network}/nguoidung/dangky.php`,
    {   
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ 
            hovaten,
            idgioitinh,
            ngaysinh,
            diachi,
            sodienthoai,
            nghenghiep,
            socmnd,
            masobnxh,
            cannang,
            chieucao,
            bmi,
            idnhommau,
            tinhtrangbenhly,
            diungvacacphanung,
            cachsudungthuoc,
            email,
            matkhau })
    })
    .then(res => res.json())
  );
  module.exports = Register;