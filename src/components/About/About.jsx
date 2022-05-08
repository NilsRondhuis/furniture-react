import PropTypes from 'prop-types';
import s from './About.module.css';

const About = ({ gallery }) => {
  return (
    <>
      <h2 className="title">Furniture new collection</h2>
      <p className={s.text}>
        Deep v you probably haven't heard of them banh mi synth actually
        affogato. Aesthetic lyft ethical <br /> drinking vinegar austint
      </p>

      <ul className={s.list}>
        {gallery.map(({ img, name }) => (
          <li className={s.item} key={img}>
            <a href="/" className={s.link}>
              <img src={img} alt={name} width="350" />
              <div className={s.design}>
                <h3 className={s.designTitle}>Truffaut literally trust</h3>
                <p>Living room furntiture | Chair</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

About.propTypes = {
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
};

export default About;
