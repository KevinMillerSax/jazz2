import Banner from './Banner';
import About from './About';
import Music from './Music';
import ContactForm from './ContractForm';

const LandingPage = () => {
  return(
    <div className="scroll-area">
      <Banner />
      <Music />
      <About />
      {/* <ContactForm /> */}
    </div>
  );
};

export default LandingPage;