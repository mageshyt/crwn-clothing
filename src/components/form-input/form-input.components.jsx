import React from "react";
import styled from "styled-components";
import "./form-input.styles.scss";
const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <Group className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          }form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </Group>
  );
};
export default FormInput;

const Group = styled.div`
  position: relative;
  margin: 45px 0;
  .form-input {
    background: none;
    border: none;
    border-bottom: 2px solid black;
    outline: none;
    font-size: 20px;
    padding: 10px 10px 10px 5px;
    width: 100%;
    display: block;
    margin: 25px 0;
    &:focus {
      outline: none;
    }
  }
`;
