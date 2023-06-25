import React, { useState, useEffect } from "react";
import Axios from "axios";

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [customer1Total, setCustomer1Total] = useState(0);
  const [customer2Total, setCustomer2Total] = useState(0);
  const [customer1Weight, setCustomer1Weight] = useState(0);
  const [customer2Weight, setCustomer2Weight] = useState(0);
  const [customer1BoxCount, setCustomer1BoxCount] = useState(0);
  const [customer2BoxCount, setCustomer2BoxCount] = useState(0);
  const [totalQuantity, setTotalquantity] = useState(0);
  const [totalweight, setTotalweight] = useState(0);
  const [totalboxcount, setTotalboxcount] = useState(0);

  useEffect(() => {
    Axios.get("http://localhost:3001/items")
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error("Error occurred while fetching items:", error);
      });
  }, []);

  useEffect(() => {
    
    let customer1Quantity = 0;
    let customer2Quantity = 0;
    let customer1Weight = 0;
    let customer2Weight = 0;
    let customer1BoxCount = 0;
    let customer2BoxCount = 0;

    items.forEach((item) => {
      if (item.username === "customer1") {
        customer1Quantity += item.quantity;
        customer1Weight += item.weight;
        customer1BoxCount += item.boxcount;
      } else if (item.username === "customer2") {
        customer2Quantity += item.quantity;
        customer2Weight += item.weight;
        customer2BoxCount += item.boxcount;
      }
    });

    setCustomer1Total(customer1Quantity);
    setCustomer2Total(customer2Quantity);
    setCustomer1Weight(customer1Weight);
    setCustomer2Weight(customer2Weight);
    setCustomer1BoxCount(customer1BoxCount);
    setCustomer2BoxCount(customer2BoxCount);

    const totalQuantity = customer1Quantity + customer2Quantity;
    const totalweight = customer1Weight + customer2Weight;
    const totalboxcount = customer1BoxCount + customer2BoxCount;
    setTotalquantity(totalQuantity);
    setTotalweight(totalweight);
    setTotalboxcount(totalboxcount);
  }, [items]);

  return (
    <div>
      <h2>Items List</h2>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Customer1</th>
            <th>Customer2</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Quantity</td>
            <td>{customer1Total}</td>
            <td>{customer2Total}</td>
            <td>{totalQuantity}</td>
          </tr>
          <tr>
            <td>Weight</td>
            <td>{customer1Weight}</td>
            <td>{customer2Weight}</td>
            <td>{totalweight}</td>
          </tr>
          <tr>
            <td>Box Count</td>
            <td>{customer1BoxCount}</td>
            <td>{customer2BoxCount}</td>
            <td>{totalboxcount}</td>
          </tr>
          
          
        </tbody>
      </table>
    </div>
  );
};

export default ItemList;
