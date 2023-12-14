import {  FaFacebook, FaYoutube, FaInstagram} from 'react-icons/fa'
import {SocialIcons, Container, SocialContainer} from './FooterStyled'

const Footer = () => {
    return (
      <>
      <Container className="d-flex flex-column flex-sm-row justify-content-between border-top mt-5">
        <p>&copy; 2023. Desenvolvido por <a href="https://matheusariza.com/" target="_blank" rel="noopener noreferrer">Matheus Ariza</a></p>
        <SocialContainer className="list-unstyled d-flex">
          <SocialIcons className="ms-3"><FaFacebook/></SocialIcons>
          <SocialIcons className="ms-3"><FaInstagram/></SocialIcons>
          <SocialIcons className="ms-3"><FaYoutube/></SocialIcons>
        </SocialContainer>
      </Container>
      </>
    )
  }
  
export default Footer