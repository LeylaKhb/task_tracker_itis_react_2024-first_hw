import Header from '../../atoms/Header';
import { Wrapper } from './styled';
import Footer from "../../atoms/Footer";

const DefaultTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      {children}
        <Footer />

    </Wrapper>
  )
}

export default DefaultTemplate;
