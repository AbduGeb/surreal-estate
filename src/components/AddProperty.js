import React, { useState } from "react";
import axios from "axios";
import "../styles/add-property.css";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      type: "",
      bedrooms: "",
      bathrooms: "",
      city: "",
      price: "",
      email: "",
    },
  };
  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:4000/api/v1/PropertyListing", fields)
      .then((response) => {
        console.log(response);
      });
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="add-property">
      Add Property Page
      <form onSubmit={handleAddProperty}>
        <br />
        <div className="block">
          <label htmlFor="title">
            Property Description
            <br />
            <input
              className="add-property-form__input"
              placeholder="Property Description"
              id="title"
              name="title"
              value={fields.title}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <br />
        <div className="block">          <label htmlFor="type">
            Property type
            <br />
            <select
              className="add-property-form__option"
              id="type"
              name="type"
              value={fields.type}
              onChange={handleFieldChange}
            >
              <option value="Flat">Flat</option>
              <option value="Detached">Detached</option>
              <option value="Semi-Detached	">Semi-Detached </option>
              <option value="Terraced">Terraced</option>
              <option value="End of Terrace">End of Terrace</option>
              <option value="Cottage">Cottage</option>
              <option value="Bungalow">Bungalow</option>
            </select>
          </label>
        </div>
        <br />
        <div className="block">
          <label htmlFor="Bedrooms">
            Bedrooms
            <br />
            <input
              className="add-property-form__input"
              placeholder="No. of bedrooms"
              id="bedrooms"
              name="bedrooms"
              type="number"
              min="0"
              value={fields.bedrooms}
              onChange={handleFieldChange}
              required
            />
          </label>
        </div>
        <br />
        <div className="block">
          <label htmlFor="Bathrooms">
            Bathrooms
            <br />
            <input
              className="add-property-form__input"
              placeholder="No. of Bathrooms"
              id="bathrooms"
              name="bathrooms"
              type="number"
              min="1"
              value={fields.bathrooms}
              onChange={handleFieldChange}
              required
            />
          </label>
        </div>
        <br />
        <div className="block">
          <label htmlFor="price">
            Property price
            <br />
            <input
              className="add-property-form__input"
              placeholder="In £GBP"
              id="price"
              name="price"
              type="number"
              min="1"
              value={fields.price}
              onChange={handleFieldChange}
              required
            />
          </label>
        </div>
        <br />
        <div className="block">
          <label htmlFor="city">
            City
            <br />
            <select
              className="add-property-form__option"
              id="city"
              name="city"
              value={fields.city}
              onChange={handleFieldChange}
            >
              <option value="Manchester">Manchester</option>
              <option value="Leeds">Leeds</option>
              <option value="Sheffield">Sheffield</option>
              <option value="Liverpool">Liverpool</option>
            </select>
          </label>
        </div>
        <br />
        <div className="block">
          <label htmlFor="email">
            Contact email Address
            <br />
            <input
              className="add-property-form__input"
              placeholder="person@email.com"
              id="email"
              name="email"
              type="email"
              value={fields.email}
              onChange={handleFieldChange}
              required
            />
          </label>
        </div>
        <br />
        <br />
        <div className="block">
          <button className="add-button" type="submit">
            Add
          </button>
        </div>
        <br />
      </form>
    </div>
  );
};

export default AddProperty;
