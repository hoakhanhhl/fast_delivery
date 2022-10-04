import { useState } from "react";
import Footer from "../Footer/Footer"
function Search(props) {
    const [idOrder, setIdOrder] = useState('');
    // const [order, setOrder] = useState([]);
    // const orders=props.orders;
    const handleSubmit = (e) => {
        e.preventDefault();
        //   setOrder();
        setIdOrder("");
    }
    const jobs = props.jobs;
    console.log(jobs)
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="p-6 border-2 text-black "
                    value={idOrder}
                    onChange={(e) => setIdOrder(e.target.value)}
                    placeholder="Nhập mã đơn hàng để tìm kiếm"
                />
            </form>
            <Footer />
        </div>
    )
}

export default Search;