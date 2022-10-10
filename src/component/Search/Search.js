import { Typography } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import axiosClient from "../../config/axiosClient";
import Footer from "../Footer/Footer";
function Search(props) {
  const [idOrder, setIdOrder] = useState("");
  const [result, setResult] = useState(null);
  const [errMSG, setErrMSG] = useState(null);
  const user = useSelector((state) => state.user.value);

  const handleSubmit = (e) => {
    setErrMSG(null);
    setResult(null);
    e.preventDefault();
    if(idOrder === "") {
       setErrMSG("Mã đơn hàng không được để trống!");
    } else {
        axiosClient
        .get(`/order/${idOrder}`)
        .then((res) => {
          setResult(res.data);
        })
        .catch((err) => setErrMSG(err.response.data));
    }
  };

  const handleChange = (e) => {
    setErrMSG(null);
    setResult(null); 
    setIdOrder(e.target.value);
  }
  return (
    <>
    <div className="p-8 px-20">
    <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="p-6 border-2 text-black font-sans w-1/2"
          value={idOrder}
          onChange={handleChange}
          placeholder="Nhập mã vận đơn bạn cần tìm"
        />
      </form>
      <div className="py-3">
    {result !== null && 
      <>
        <Typography variant="h5" sx={{py:2}}>Thông tin đơn hàng</Typography>
        <Typography>OrderID: {result.orderID}</Typography>
        <Typography>Tên đơn hàng: {result.tenDonHang}</Typography>
        <Typography>Khối lượng: {result.khoiLuong}</Typography>
        <Typography>Nơi gửi: {result.noiGui === "" ? "chưa cập nhật" : result.noiGui}</Typography>
        <Typography>Trạng thái: {result.trangThai}</Typography>
        {result.trungChuyen != null && result.trungChuyen.map((trungChuyen) =>  <Typography>{trungChuyen}</Typography>)}
        {user.email === result.email || user.id === result.nguoiTao.id && <>
        <Typography variant="h5" sx={{py:2}}>Thông tin người nhận: </Typography>
        <Typography>Tên người nhận: {result.nguoiNhan}</Typography>
        <Typography>Số điện thoại: {result.sdt}</Typography>
        <Typography>Địa chỉ giao hàng: {result.diaChi}</Typography>
        </>}
      </>}
    {errMSG !== null && 
    <>
       <div className="p-3 font-sans">Đơn hàng có mã: '{idOrder}' không tồn tại !</div>
    </>}
      </div>
    </div>
      
      <Footer />
    </>
  );
}

export default Search;
