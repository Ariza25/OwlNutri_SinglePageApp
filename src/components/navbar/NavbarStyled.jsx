import styled from 'styled-components'

export const Logo = styled.img`
width: 170%;
height: 15vh;
margin-left: -5rem;

@media (max-width: 1280px) {
  width: 170%;
  height: 15vh;
  margin-left: -8rem;
  }

@media (max-width: 992px) {
  width: 170%;
  height: 10vh;
  margin-left: -8rem;
  }

@media (max-width: 768px) {
  width: 170%;
  height: 10vh;
  margin-left: -5rem;
  }

  @media (max-width: 500px) {
    display: none;
  }
`

export const SocialContainer = styled.ul`
 margin-left: 26rem;

 @media (max-width: 1280px) {
  margin-left: 25rem
  }

 @media (max-width: 992px) {
  margin-left: 15rem
  }

 @media (max-width: 768px) {
  margin-left: 15rem
  }

 @media (max-width: 500px) {
  display: none;
  }
`

export const SocialMedia = styled.i`
 margin-top: 0rem;
 margin-bottom: 2rem;
 font-size: 15px;
 color: #8e412e;

 &:hover{
   color: #8e412ead;
    cursor: pointer;
 }
`

export const Header = styled.div`
background-color: aliceblue;

@media (max-width: 768px) {
  width: 100%;
}

@media (max-width: 500px) {
  width: 120vw;
  margin-top: -.5rem;
  margin-left: -2rem;
  height: 12vh;
}

@media (max-width: 400px) {
  width: 120vw;
  margin-top: -.5rem;
  margin-left: -2rem;
  height: 12vh;
}
`

export const MenuContainer = styled.ul`
 margin-left: 17rem;

 @media (max-width: 1280px) {
  margin-left: 1rem;
  }

 @media (max-width: 992px) {
  margin-left: 6rem;
  }

 @media (max-width: 768px) {
  margin-left: 5rem;
  }

 @media (max-width: 500px) {
  margin-left: 0;
  }
`

export const MenuItems = styled.li`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
 margin-top: 0rem;
 margin-bottom: .5rem;
 font-size: 18px;
 color: #198754;
 text-decoration: none;

 &:hover{
   color: #198754a7;
    cursor: pointer;
 }

 @media (max-width: 500px) {
  margin-top: -2rem;
  font-size: 15px;
  width: 100%;
}
`
