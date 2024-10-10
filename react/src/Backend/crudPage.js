import { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

function Crud() {
    const [data, setData] = useState([]);
    const [isBillGenerated, setIsBillGenerated] = useState(false);
    const [billItems, setBillItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const billSectionRef = useRef(null);

    useEffect(() => {
        fetch("http://localhost:3000/schemaProject")
            .then(res => res.json())
            .then(res => setData(res));
    }, []);

    const navigate = useNavigate();

    const handleAddClick = (index) => {
        setData(prevData => {
            const newData = [...prevData];
            newData[index].count = (newData[index].count || 0) + 1;
            return newData;
        });
    };

    const handleAddClickMinus = (index) => {
        setData(prevData => {
            const newData = [...prevData];
            if (newData[index].count > 0) {
                newData[index].count = (newData[index].count || 0) - 1;
            }
            return newData;
        });
    };

    const handleGenerateBill = () => {
        const selectedItems = data.filter(item => item.count > 0);
        const billItems = selectedItems.map(item => ({
            name: item.name,
            price: item.price,
            count: item.count,
            totalPrice: item.price * item.count
        }));

        const totalAmount = billItems.reduce((total, item) => total + item.totalPrice, 0);
        setBillItems(billItems);
        setTotalAmount(totalAmount);
        setIsBillGenerated(true);

        setTimeout(() => {
            if (billSectionRef.current) {
                billSectionRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        },100);
    };

    const handleNewBill = () => {
        setData(prevData => {
            return prevData.map(item => ({
                ...item,
                count: 0
            }));
        });
        setBillItems([]);
        setTotalAmount(0);
        setIsBillGenerated(false);
    };

    const formattedData = data.map((project, index) => {
        return (
            <div className="col-3 mb-4 main" key={project.id}>
                <div className="card">
                    <div className="con">
                        <img src={project.Image} className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{project.name}</h5>
                        <h5 className="card-title">PRICE : ₹ {project.price}</h5>
                        
                        <div className="row">
                            <Link to={"/getAll/" + project.id} className="btn btn-outline-primary col-5 me-3 ms-3 mb-2">Read More</Link>
                            <Link className="btn btn-outline-warning mb-2 col-5" to={'/getAll/update/' + project.id}>Edit</Link>
                        </div>
                        <div className="row">
                            <button className="btn btn-outline-primary col me-3 ms-3" onClick={() => handleAddClick(index)}> + </button>
                            <div className="counter col-4">
                                {project.count || 0}
                            </div>
                            <button className="btn btn-outline-primary col me-3 ms-3" onClick={() => handleAddClickMinus(index)}> - </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <>
            <div className="Heading">
                My Order !!!
            </div>
            <div className="container">
                <div className="row">
                    {formattedData}
                </div>
                <button className="btn btn-outline-success mt-4" onClick={handleGenerateBill}>Generate Bill</button>
                <button className="btn btn-outline-danger mt-4 ms-3" onClick={handleNewBill}>New Bill</button>
                {isBillGenerated && (
                    <div className="bill-section" ref={billSectionRef}>
                        <h3>Friends Restaurant</h3>
                        <ul style={{ listStyleType: "none" }}>
                            {billItems.map((item, index) => (
                                <li key={index}>{item.name} - {item.count} x ₹{item.price} = ₹{item.totalPrice}</li>
                            ))}
                        </ul>
                        <h4>Total: ₹{totalAmount}</h4>
                    </div>
                )}
            </div>
        </>
    );
}
export default Crud;
