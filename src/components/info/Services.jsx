import { Image, Text, Title, Container } from "../info/ServicesStyled";
import nutri1 from "../../assets/nutri1.jpeg";
import nutri2 from "../../assets/nutri2.webp";
import nutri3 from "../../assets/nutri3.jpeg";
import massagem1 from "../../assets/massagem1.webp";
import massagem2 from "../../assets/massagem2.webp";
import massagem3 from "../../assets/massagem3.webp";
import estetica1 from "../../assets/estetica1.jpeg";
import estetica2 from "../../assets/estetica2.webp";
import estetica3 from "../../assets/estetica3.jpeg";

const Services = () => {
  return (
    <div className="container mt-0" id="services">
      <Title className="pb-2 border-bottom text-center text-success">
        O QUE VOCÊ DESEJA?
      </Title>

      <div className="row row-cols-3 g-3 pt-3">
        <Container className="col-12 col-lg-4">
          <div className="card card-cover h-75 overflow-hidden rounded-4 shadow-lg">
            <ul className="d-flex list-unstyled mt-auto">
              <Image src={nutri1} alt="melhore sua alimentação" className="rounded-4" />
            </ul>
            <div className="d-flex flex-column h-100 p-5 pb-3">
              <Text className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold text-success">
                Melhorar <br />a sua
                <br />
                alimentação?
              </Text>
            </div>
          </div>
        </Container>

        <Container className="col-12 col-lg-4">
          <div className="card card-cover h-75 overflow-hidden rounded-4 shadow-lg">
            <ul className="d-flex list-unstyled mt-auto">
              <Image src={nutri2} alt="busque a saúde perfeita" className="rounded-4" />
            </ul>
            <div className="d-flex flex-column h-100 p-5 pb-3">
              <Text className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold text-left text-success">
                Buscar a <br />
                saúde
                <br /> perfeita?
              </Text>
            </div>
          </div>
        </Container>

        <Container className="col-12 col-lg-4">
          <div className="card card-cover h-75 overflow-hidden rounded-4 shadow-lg">
            <ul className="d-flex list-unstyled mt-auto">
              <Image src={nutri3} alt="Conquiste a medida perfeita" className="rounded-4" />
            </ul>
            <div className="d-flex flex-column h-100 p-5 pb-3">
              <Text className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold text-success">
                Conquistar as<br /> medidas dos <br />
                seus sonhos?
              </Text>
            </div>
          </div>
        </Container>
      </div>

      <div className="row row-cols-3 g-3 mt-1">
        <Container className="col-12 col-lg-4">
          <div className="card card-cover h-75 overflow-hidden rounded-4 shadow-lg">
            <ul className="d-flex list-unstyled mt-auto">
              <Image src={massagem1} alt="Receber uma ótima massagem" className="rounded-4" />
            </ul>
            <div className="d-flex flex-column h-100 p-5 pb-3">
              <Text className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold text-success">
                Receber <br />uma ótima
                <br />
                massagem?
              </Text>
            </div>
          </div>
        </Container>

        <Container className="col-12 col-lg-4">
          <div className="card card-cover h-75 overflow-hidden rounded-4 shadow-lg">
            <ul className="d-flex list-unstyled mt-auto">
              <Image src={massagem2} width={500} alt="Buscar a saúde perfeita" className="rounded-4" />
            </ul>
            <div className="d-flex flex-column h-100 p-5 pb-3">
              <Text className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold text-success">
              Conhecer ótimos produtos? <br/>
              </Text>
            </div>
          </div>
        </Container>

        <Container className="col-12 col-lg-4">
          <div className="card card-cover h-75 overflow-hidden rounded-4 shadow-lg">
            <ul className="d-flex list-unstyled mt-auto">
              <Image src={massagem3} alt="Bootstrap"  className="rounded-4" />
            </ul>
            <div className="d-flex flex-column h-100 p-5 pb-3">
              <Text className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold text-success">
                Receber Massagem modeladora? 
              </Text>
            </div>
          </div>
        </Container>
      </div>

      <div className="row row-cols-3 g-3 mt-1">
        <Container className="col-12 col-lg-4">
          <div className="card card-cover h-75 overflow-hidden rounded-4 shadow-lg">
            <ul className="d-flex list-unstyled mt-auto">
              <Image src={estetica1} alt="Receber uma ótima massagem" className="rounded-4" />
            </ul>
            <div className="d-flex flex-column h-100 p-5 pb-3">
              <Text className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold text-success">
              Melhorar os cuidados com a pele?
              </Text>
            </div>
          </div>
        </Container>

        <Container className="col-12 col-lg-4">
          <div className="card card-cover h-75 overflow-hidden rounded-4 shadow-lg">
            <ul className="d-flex list-unstyled mt-auto">
              <Image src={estetica2} width={370} alt="Buscar a saúde perfeita" className="rounded-4" />
            </ul>
            <div className="d-flex flex-column h-100 p-5 pb-3">
              <Text className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold text-success">
              Encantar-se <br/>com a sua beleza?<br/>
              </Text>
            </div>
          </div>
        </Container>

        <Container className="col-12 col-lg-4">
          <div className="card card-cover h-75 overflow-hidden rounded-4 shadow-lg">
            <ul className="d-flex list-unstyled mt-auto">
              <Image src={estetica3}width={400} alt="Bootstrap"  className="rounded-4" />
            </ul>
            <div className="d-flex flex-column h-100 p-5 pb-3">
              <Text className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold text-success">
                Conseguir os melhores produtos?
              </Text>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Services;
