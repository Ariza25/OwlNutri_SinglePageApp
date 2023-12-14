import {IconContainer} from '../whats/WhatsStyled'
import { FaWhatsapp } from "react-icons/fa";

const Whats = () => {
  return (
    <div>
      <a
        href="https://web.whatsapp.com/send?phone=5543998068708"
        rel="noreferrer"
        target="_blank"
      >
        <IconContainer><FaWhatsapp/></IconContainer>
      </a>
    </div>
  );
};

export default Whats;
