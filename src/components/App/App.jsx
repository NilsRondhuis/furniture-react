import Header from '../Header/Header';
import Section from '../common/Section/Section';
import Hero from '../Hero/Hero';
import About from '../About/About';
import logoImg from '../../images/proj/logo/logo.png';
import heroImg from '../../images/proj/hero/armchair.png';
import gallery from '../../data/gallery';

const App = () => {
  return (
    <>
      <Header logoImg={logoImg} />
      <Section type="hero">
        <Hero heroImg={heroImg} />
      </Section>
      <Section type="about">
        <About gallery={gallery} />
      </Section>
    </>
  );
};

export default App;
