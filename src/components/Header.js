import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import { selectCars } from "../features/carSlice";
import { useSelector } from "react-redux";

const Header = () => {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);
  console.log(cars);
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <a href="#" key={index}>
              {car}
            </a>
          ))}
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <IconButton
          style={{
            marginLeft: "-10px",
          }}
          onClick={() => setBurgerStatus(true)}
        >
          <CustomMenu />
        </IconButton>
        {/* <MenuIcon /> */}
      </RightMenu>
      <BurgerMenu show={burgerStatus}>
        <CloseWrapper>
          <IconButton onClick={() => setBurgerStatus(false)}>
            <CustomClose />
          </IconButton>
        </CloseWrapper>
        {cars &&
          cars.map((car, index) => (
            <li key={index}>
              <a href="#">{car}</a>
            </li>
          ))}
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#"> Trade-in</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadaster</a>
        </li>
        <li>
          <a href="#">Semi</a>
        </li>
      </BurgerMenu>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  @media (max-width: 768px) {
    padding: 0 8px;
  }
`;
const Menu = styled.div`
  display: flex;
  margin-left: 60px;
  flex: 1;
  justify-content: center;
  opacity: 0;
  animation: 0.7s fadein 0.5s forwards;
  align-items: center;

  @keyframes fadein {
    100% {
      opacity: 1;
    }
  }

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
    cursor: pointer;
    /* background-color: orange; */
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  IconButton {
    display: none;
    &&& {
      display: none;
    }
    @media (max-width: 1000px) {
      &&& {
        display: block;
      }
    }
  }
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;
const CustomMenu = styled(MenuIcon)`
  /* margin-left: -10px; */
  &&& {
    display: none;
  }
  @media (max-width: 1000px) {
    &&& {
      display: block;
    }
  }
`;
const BurgerMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.92);
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transition: all 0.4s ease-out;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  li {
    padding: 15px 0px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      transition: all 0.2s ease-out;
      font-weight: 600;
      :hover {
        padding-left: 4px;
      }
    }
  }
  @media (max-width: 650px) {
    width: 230px;
  }
`;
const CustomClose = styled(Close)``;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: -15px;
  margin-top: -10px;
`;
