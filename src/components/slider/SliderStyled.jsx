import styled from "styled-components";

export const Container = styled.div`
  height: 120vh;

  @media (max-width: 1280px) {
    height: 90vh;
  }

  @media (max-width: 992px) {
    height: 60vh;
  }

  @media (max-width: 768px) {
    height: 60vh;
  }
  @media (max-width: 500px) {
    height: 60vh;
  }
`;

export const Image = styled.img`
  height: 120vh;
  background-size: contain;

  @media (max-width: 1280px) {
    height: 90vh;
  }

  @media (max-width: 992px) {
    height: 60vh;
  }

  @media (max-width: 768px) {
    height: 60vh;
  }

  @media (max-width: 500px) {
    height: 60vh;
  }
`;

export const SliderText = styled.h3`
  font-size: 60px;
  font-weight: 800;
  text-align: center;
  position: absolute;
  left: 3rem;
  color: aliceblue;
  text-shadow: 1px 1px 10px #19875423;
  width: 90%;

  @media (max-width: 1280px) {
    top: 13rem;
    left: 2rem;
    font-size: 70px;
  }

  @media (max-width: 992px) {
    top: 18rem;
    left: 2rem;
    font-size: 60px;
  }

  @media (max-width: 768px) {
    top: 15rem;
    left: 2rem;
    font-size: 60px;
  }

  @media (max-width: 500px) {
    top: 11rem;
    left: 1.5rem;
    font-size: 40px;
  }
`;
