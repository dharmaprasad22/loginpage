import React, { useState, useEffect } from "react";
import Axios from "axios";

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [customer1Total, setCustomer1Total] = useState(0);
  const [customer2Total, setCustomer2Total] = useState(0);
  const [customer1weight, setCustomer1weight] = useState(0);
  const [customer2weight, setCustomer2weight] = useState(0);
  const [customer1boxcount, setCustomer1boxcount] = useState(0);
  const [customer2boxcount, setCustomer2boxcount] = useState(0);

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
    // Calculate the total quantity for customer1 and customer2
    const customer1Quantity = items.reduce((sum, item) => {
      if (item.username === "customer1") {
        return sum + item.quantity;
      }
      return sum;
    }, 0);

    const customer2Quantity = items.reduce((sum, item) => {
      if (item.username === "customer2") {
        return sum + item.quantity;
      }
      return sum;
    }, 0);

    const customer1weight = items.reduce((sum, item) => {
        if (item.username === "customer1") {
          return sum + item.weight;
        }
        return sum;
      }, 0);

    const customer2weight = items.reduce((sum, item) => {
        if (item.username === "customer1") {
          return sum + item.weight;
        }
        return sum;
      }, 0);
    const customer1boxcount = items.reduce((sum, item) => {
        if (item.username === "customer1") {
          return sum + item.boxcount;
        }
        return sum;
      }, 0);
    const customer2boxcount = items.reduce((sum, item) => {
        if (item.username === "customer1") {
          return sum + item.boxcount;
        }
        return sum;
      }, 0);

    setCustomer1Total(customer1Quantity);
    setCustomer2Total(customer2Quantity);
    setCustomer1weight(customer1weight);
    setCustomer2weight(customer2weight);
    setCustomer1boxcount(customer1boxcount);
    setCustomer2boxcount(customer2boxcount);
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
          {items.map((item) => (
            <React.Fragment key={item.Id}>
              <tr>
                <td>Quantity</td>
                <td>{customer1Total}</td>
                <td>{customer2Total}</td>
                <td></td>
              </tr>
              <tr>
                <td>Weight</td>
                <td>{customer1weight}</td>
                <td>{customer2weight}</td>
                <td></td>
              </tr>
              <tr>
                <td>Box Count</td>
                <td>{customer1boxcount}</td>
                <td>{customer2boxcount}</td>
                <td></td>
              </tr>
            </React.Fragment>
          ))}
          <tr>
            <td>Total Quantity</td>
            <td>{customer1Total}</td>
            <td>{customer2Total}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ItemList;
