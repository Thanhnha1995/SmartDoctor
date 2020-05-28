import { network } from "../../config/Network";
const Datlichxn = (
  token,
  idnguoidung,
  iddichvu,
  ngay,
  giatien,
  idca,
  mahdxn,
  idbenhvien,
  idbacsi,
  giatri,
  idtrangthailichkham
) =>
  fetch(`${network}/datlichxn/datxn.php`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      token,
      idnguoidung,
  iddichvu,
  ngay,
  giatien,
  idca,
  mahdxn,
  idbenhvien,
  idbacsi,
  giatri,
  idtrangthailichkham,
    }),
  }).then((res) => res.text());
module.exports = Datlichxn;
