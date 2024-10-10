import React from "react";
import { useLocation } from "react-router-dom";

function Bill() {
    const location = useLocation();
    const { billItems, totalAmount } = location.state;

    return (
        <div className="bill-section">
            <h3>Generated Bill</h3>
            <ul>
                {billItems.map((item, index) => (
                    <li key={index}>{item.name} - {item.count} x ₹{item.price} = ₹{item.totalPrice}</li>
                ))}
            </ul>
            <h4>Total: ₹{totalAmount}</h4>
        </div>
    );
}

export default Bill;
