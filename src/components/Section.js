import React, { useEffect } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import AOS from "aos";
import "aos/dist/aos.css";

const Section = ({
  title,
  description,
  leftBtnText,
  rightBtnText,
  backgroundImg,
}) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Wrap backImg={backgroundImg}>
      {/* <Fade bottom> */}
      <ItemText
        data-aos="fade-up"
        data-aos-delay="180"
        data-aos-duration="1100"
      >
        <h1>{title}</h1>
        <p>{description} </p>
      </ItemText>
      {/* </Fade> */}
      <Buttons>
        {/* <Fade bottom> */}
        <ButtonGroup
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1200"
        >
          <LeftButton>{leftBtnText}</LeftButton>
          {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg" />
        {/* </Fade> */}
      </Buttons>
    </Wrap>
  );
};

export default Section;

const Wrap = styled.div`
  z-index: -1;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  flex-shrink: shrink;
  background-repeat: no-repeat;
  background-position: center;
  /* background-image: url("/images/model-s.jpg"); */
  background-image: ${(props) => `url("/images/${props.backImg}")`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;
const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  height: 35px;
  /* margin-top: 20px; */
  animation: animateDown infinite 1.5s;
  overflow: hidden;
  margin-bottom: 10px;
`;
const Buttons = styled.div`
  overflow: hidden;
`;
