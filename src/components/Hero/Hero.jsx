import PropTypes from 'prop-types';
import s from './Hero.module.css';

const Hero = ({ heroImg }) => {
  return (
    <>
      <div className={`container ${s.container}`}>
        <div className={s.design}>
          <div className={s.img}>
            <img src={heroImg} alt="Armchair" width="700" />
          </div>
        </div>
        <div className={s.box}>
          <h1 className={s.title}>Furniture collection</h1>
          <p>
            Deep v you probably haven't heard of them banh mi synth actually
            affogato. Aesthetic lyft ethical drinking vinegar austint
          </p>
        </div>
      </div>
    </>
  );
};

Hero.propTypes = {
  heroImg: PropTypes.string.isRequired,
};

export default Hero;
