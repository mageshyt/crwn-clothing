import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/crown.svg";
const Header = () => {
  return (
    <Container>
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <Option>
        {" "}
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      </Option>
    </Container>
  );
};

export default Header;

//Container
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  .logo-container {
    width: 70px;
    height: 100%;
    padding: 25px;
  }
`;

//Options
const Option = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: flex-end;
  font-size: 22px;
  .option {
    padding: 20px 15px;
  }
`;
