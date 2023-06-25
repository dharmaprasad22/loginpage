import React, { useState } from "react";
import Axios from "axios";
import "./detail.css";
import { useLocation } from 'react-router-dom';




const Details = () => {
    const [orderDate, setOrderDate] = useState("");
    const [company, setCompany] = useState("");
    const [owner, setOwner] = useState("");
    const [item, setItem] = useState("");
    const [quantity, setQuantity] = useState("");
    const [weight, setWeight] = useState("");
    const [requestForShipment, setRequestForShipment] = useState("");
    const [trackingId, setTrackingId] = useState("");
    const [shipmentSize, setShipmentSize] = useState("");
    const [boxcount, setBoxcount] = useState("");
    const [specification, setSpecification] = useState("");
    const [checklist, setChecklistquantity] = useState("");


    const [detailaStatus, setDetailsStatus] = useState("");

    const location = useLocation();
    const { username } = location.state;

    const handleSubmit = (e) => {
        e.preventDefault();
        
        Axios.post("http://localhost:3001/details", {

            orderDate: orderDate,
            company: company,
            owner: owner,
            item: item,
            quantity: quantity,
            weight: weight,
            requestForShipment: requestForShipment,
            trackingId: trackingId,
            shipmentSize: shipmentSize,
            boxcount: boxcount,
            specification: specification,
            checklist: checklist,
            username: username
               
    })
      .then((response) => {
        if (response.data.message) {
          setDetailsStatus(response.data.message);
        } else {
          setDetailsStatus("ACCOUNT CREATED SUCCESSFULLY");
        }
      })
      .catch((error) => {
        console.error("Error occurred during registration:", error);
      });
  };
       
  return (
    <div className="container">
        <div className="detailsForm">
        <form >
      <h4>Shipment Form</h4>
      <label htmlFor="orderDate">Order Date*</label>
      <input
        className="textInput"
        type="date"
        name="orderDate"
        value={orderDate}
        onChange={(e) => setOrderDate(e.target.value)}
        required
      />
      <label htmlFor="company">Company*</label>
      <input
        className="textInput"
        type="text"
        name="company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder="Enter the Company name"
        required
      />
      <label htmlFor="owner">Owner*</label>
      <input
        className="textInput"
        type="text"
        name="owner"
        value={owner}
        onChange={(e) => setOwner(e.target.value)}
        placeholder="Enter the Owner name"
        required
      />
      <label htmlFor="item">Item*</label>
      <input
        className="textInput"
        type="text"
        name="item"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Enter the Item"
        required
      />
      <label htmlFor="quantity">Quantity*</label>
      <input
        className="textInput"
        type="number"
        name="quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        placeholder="Enter the Quantity"
        required
      />
      <label htmlFor="weight">Weight*</label>
      <input
        className="textInput"
        type="number"
        name="weight"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        placeholder="Enter the Weight"
        required
      />
      <label htmlFor="requestForShipment">Request for Shipment*</label>
      <input
        className="textInput"
        type="text"
        name="requestForShipment"
        value={requestForShipment}
        onChange={(e) => setRequestForShipment(e.target.value)}
        placeholder="Enter the Request for Shipment"
        required
      />
      <label htmlFor="trackingId">Tracking ID*</label>
      <input
        className="textInput"
        type="text"
        name="trackingId"
        value={trackingId}
        onChange={(e) => setTrackingId(e.target.value)}
        placeholder="Enter the Tracking ID"
        required
      />
      <label htmlFor="shipmentSize">Shipment Size*</label>
      <select
        className="textInput"
        name="shipmentSize"
        value={shipmentSize}
        onChange={(e) => setShipmentSize(e.target.value)}
        required
      >
        <option value="">Select Shipment Size</option>
        <option value="s">Small</option>
        <option value="m">Medium</option>
        <option value="l">Large</option>
      </select>

      <label htmlFor="weight">Box count*</label>
      <input
        className="textInput"
        type="number"
        name="boxcount"
        value={boxcount}
        onChange={(e) => setBoxcount(e.target.value)}
        placeholder="Enter the box-count"
        required
      />
      <label htmlFor="Specification">Specification*</label>
      <input
        className="textInput"
        type="text"
        name="specification"
        value={specification}
        onChange={(e) => setSpecification(e.target.value)}
        placeholder="Enter the specification"
        required
      />
      <label htmlFor="Checklist Quantity">Checklistquantity*</label>
      <input
        className="textInput"
        type="text"
        name="checklist-quantity"
        value={checklist}
        onChange={(e) => setChecklistquantity(e.target.value)}
        placeholder="Enter the Checklist Quantity"
        required
      />
      

      <input className="button" type="submit" value="Submit" onClick={handleSubmit} />

      <h1 style={{fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{detailaStatus}</h1>
    </form>
    </div>
        
    </div>
  )
}

export default Details