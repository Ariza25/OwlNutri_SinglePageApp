import Slide1 from "../../assets/slide1.png";
import Slide2 from "../../assets/slide2.jpeg";
import Slide3 from "../../assets/slide3.png";
import { Container, Image, SliderText } from "./SliderStyled";

const Slider = () => {
  return (
    <>
      <Container
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
      >
        <div className="carousel-inner" id="home">
          <div className="carousel-item active">
            <Image src={Slide1} className="d-block w-100" alt="nutrição" />
            <div className="">
              <SliderText>Transforme<br/> sua alimentação</SliderText>
            </div>
          </div>
          <div className="carousel-item">
            <Image src={Slide2} className="d-block w-100" alt="estética" />
            <div className="">
              <SliderText>Olhe-se no espelho e<br/> encontre a perfeição</SliderText>
            </div>
          </div>
          <div className="carousel-item">
            <Image src={Slide3} className="d-block w-100" alt="massagem" />
            <div className="">
              <SliderText>Relaxe e modele<br/> seu corpo</SliderText>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </Container>
    </>
  );
};

export default Slider;
