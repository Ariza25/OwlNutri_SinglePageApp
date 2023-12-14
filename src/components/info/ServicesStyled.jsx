import styled from 'styled-components'

export const Title = styled.h2`
font-size: 35px;
font-weight: bold;
`

export const Container = styled.div`
opacity: 100%;
transition: all .5s ease-in-out;
margin-bottom: -5rem;

&:hover{
    opacity: 80%;
    transform: scale(1.05);
    cursor: pointer;
}

@media (max-width: 992px) {
    margin-bottom: -7rem;
}

@media (max-width: 768px) {
    margin-bottom: -7rem;
}

@media (max-width: 500px) {
    margin-bottom: -8rem;
}

@media (max-width: 400px) {
    margin-bottom: -8rem;
}
`

export const Image = styled.img`
background-size: contain;
background-position: cover;
height: 70vh;

@media (max-width: 992px) {
    width: 100%;
    height: 40vh;
}

@media (max-width: 768px) {
    width: 100%;
    height: 50vh;
}

@media (max-width: 500px) {
    height: 55vh;
}
`

export const Text = styled.h3`
position: absolute;
top: 0%;
z-index: 0;
cursor: pointer;

@media (max-width: 992px) {
    font-size: 60px;
}

@media (max-width: 768px) {
    font-size: 60px;
}

@media (max-width: 500px) {
    font-size: 50px;
}

@media (max-width: 400px) {
    font-size: 40px;
}

`