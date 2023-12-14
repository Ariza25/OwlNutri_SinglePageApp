import styled from "styled-components";

export const Container = styled.i`
  max-width: 100%;
  padding: 0 4rem;
  padding-top: 1rem;
  background-color: aliceblue;

  @media (max-width: 500px) {
      text-align: center;
    }

    @media (max-width: 400px) {
      text-align: center;
    }

  a {
    text-decoration: none;
    color: #198754;

    &:hover {
      color: #198754a7;
      cursor: pointer;
    }
  }
`;

export const SocialContainer = styled.div`
  @media (max-width: 500px) {
    width: 100%;
    margin-left: 30%;
    padding-bottom: 1rem;
  }

  @media (max-width: 400px) {
    width: 100%;
    margin-left: 28%;
    padding-bottom: 1rem;
  }
`;

export const SocialIcons = styled.i`
  color: #8e412e;

  &:hover {
    color: #8e412ead;
    cursor: pointer;
  }
`;
