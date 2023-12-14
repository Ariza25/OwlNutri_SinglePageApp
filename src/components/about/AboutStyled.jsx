import styled from 'styled-components'

export const Video = styled.video`
margin-left: 1rem;

@media (min-width: 1280px) {
    margin: 2rem 0rem;
    height: auto;
    width: 100%;
}

@media (max-width: 992px) {
    margin: 2rem 0rem;
    height: 24.5vh;
    width: 100%;
}

@media (max-width: 768px) {
    margin: 2rem 0rem;
    height: 24.5vh;
    width: 100%;
}

@media (max-width: 500px) {
    margin: 2rem 0rem;
    height: 24.5vh;
    width: 100%;
}

@media (max-width: 400px) {
    margin: 3rem 0rem;
    height: 23vh;
    width: 100%;
}
`