import {
  FaHome,
  FaBlog,
  FaFacebook,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { IoMdContact } from "react-icons/io";
import {
  Logo,
  SocialMedia,
  Header,
  SocialContainer,
  MenuItems,
  MenuContainer,
} from "./NavbarStyled";
import logo from "../../assets/logo.png";
import {Link} from "react-scroll";

const Navbar = () => {
  return (
    <Header className="fixed-top">
      <div className="px-3 py-2 border-bottom">
        <div className="container d-flex">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
            >
              <Logo src={logo} />
            </a>
          </div>

          <div className="text-center container">
            <div className="col-12">
              <div className="row">
                <SocialContainer className="nav col-12 text-small d-flex justify-content-center gap-2">
                  <SocialMedia>
                    <FaFacebook />
                  </SocialMedia>
                  <SocialMedia>
                    <FaInstagram />
                  </SocialMedia>
                  <SocialMedia>
                    <FaYoutube />
                  </SocialMedia>
                </SocialContainer>
              </div>

              <div className="row">
                <MenuContainer className="nav col-12 text-small d-flex justify-content-center gap-4">
                  <Link
                    className="text-decoration-none"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={0}
                    delay={100}
                    duration={1000}
                  >
                    <MenuItems>
                      <FaHome />
                      Home
                    </MenuItems>
                  </Link>
                  <Link
                    className="text-decoration-none"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-60}
                    delay={100}
                    duration={1000}
                  >
                    <MenuItems>
                      <ImProfile />
                      Sobre
                    </MenuItems>
                  </Link>
                  <Link
                    className="text-decoration-none"
                    to="services"
                    spy={true}
                    smooth={true}
                    offset={-150}
                    delay={100}
                    duration={1000}
                  >
                    <MenuItems>
                      <HiOutlineSquares2X2 />
                      Services
                    </MenuItems>
                  </Link>
                  <Link
                    className="text-decoration-none"
                    to="blog"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    delay={100}
                    duration={1000}
                  >
                    <MenuItems>
                      <FaBlog />
                      Blog
                    </MenuItems>
                  </Link>
                  <Link
                    className="text-decoration-none"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    delay={100}
                    duration={1000}
                  >
                    <MenuItems>
                      <IoMdContact />
                      Contato
                    </MenuItems>
                  </Link>
                </MenuContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default Navbar;
