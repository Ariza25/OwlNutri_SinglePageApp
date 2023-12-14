import { useState, useEffect, useCallback } from "react";
import { addDoc, getDocs } from "firebase/firestore";
import { dataCollectionRef } from "../../db";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container } from "./ContactStyled";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      function notifySuccess() {
        toast.success("Formulário enviado com sucesso", {
          autoClose: 1500,
        });
      }

      function notifyError() {
        toast.error("Ocorreu um erro. Tente mais tarde", {
          autoClose: 1500,
        });
      }

      const { name, email, subject, message } = formState;

      if (!name || !email || !subject || !message) {
        return;
      }

      try {
        // Adicione os dados do formulário à coleção "messageForm" no Firebase
        await addDoc(dataCollectionRef, formState);
        // Limpe o formulário após o envio bem-sucedido
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        notifySuccess();
      } catch (error) {
        console.error("Erro ao enviar mensagem:", error);
        notifyError();
      }
    },
    [formState]
  );
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getDocs(dataCollectionRef);
        console.log(data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };
    getData();
  }, []);

  return (
    <Container id="contact">
      <ToastContainer/>

      <h2 className="pb-2 pt-5 border-bottom text-center text-success">
        ENTRE EM CONTATO
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="container col-12 col-md-8 col-lg-6 col-xl-6 text-center pt-3">
          <input
            type="name"
            className="form-control mb-2"
            placeholder="Nome Completo"
            name="name"
            id="name"
            required
            value={formState.name}
            onChange={(e) =>
              setFormState({
                ...formState,
                name: e.currentTarget?.value || "",
              })
            }
          />
          <input
            type="email"
            className="form-control mb-2"
            placeholder="E-mail"
            name="email"
            id="email"
            required
            value={formState.email}
            onChange={(e) =>
              setFormState({
                ...formState,
                email: e.currentTarget?.value || "",
              })
            }
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Assunto"
            name="subject"
            id="subject"
            required
            value={formState.subject}
            onChange={(e) =>
              setFormState({
                ...formState,
                subject: e.currentTarget?.value || "",
              })
            }
          />
          <textarea
            className="form-control"
            placeholder="Sua mensagem..."
            name="message"
            id="message"
            required
            value={formState.message}
            onChange={(e) =>
              setFormState({
                ...formState,
                message: e.currentTarget?.value || "",
              })
            }
          />
          <button
            type="submit"
            className="btn btn-success mt-3 px-5 mb-2"
            value="Enviar"
          >
            Enviar
          </button>
        </div>
      </form>
    </Container>
  );
};

export default Contact;
