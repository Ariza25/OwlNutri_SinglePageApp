import video from "../../assets/profile.mp4";
import { Video } from "./AboutStyled";

const About = () => {
  return (
    <div className="container-fluid px-4 pt-3 pb-4" id="about">
      <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
        <div className="col d-flex flex-column align-items-start gap-2">
          <h2 className="fw-bold text-success">Você já conhece a Owl Nutri</h2>
          <p className="text-body-secondary">
            Somos uma empresa nutricional focada para ajudar na conquista de uma
            vida mais saudável. Com a gente você poderá melhorar seu peso,
            medidas e também buscar aquela estética invejável.
          </p>
          <a
            href="https://web.whatsapp.com/send?phone=5543998068708"
            rel="noreferrer"
            target="_blank"
            className="btn btn-success btn-lg"
          >
            Saiba mais
          </a>
        </div>

        <div className="col shadow-lg container mt-5">
          <Video
            autoPlay
            loop
            muted
            src={video}
            height={400}
            width={520}
          ></Video>
        </div>
      </div>
    </div>
  );
};

export default About;
