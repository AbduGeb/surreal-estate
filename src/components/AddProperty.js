import React, { useState } from "react";
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
    console.log(fields);
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="add-property">
      Add Property Page
      <form onSubmit={handleAddProperty}>
        <label htmlFor="title">
          Title
          <input
          placeholder="Title"
            id="title"
            name="title"
            value={fields.title}
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="type">
          Property type
          <select
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

        <label htmlFor="Bedrooms">
          Bedrooms
          <input
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

        <label htmlFor="Bathrooms">
          Bathrooms
          <input
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

        <label htmlFor="city">
          City
          <select
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

        <label htmlFor="price">
          Property price
          <input
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

        <label htmlFor="email">
            Contact email Address
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

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddProperty;
