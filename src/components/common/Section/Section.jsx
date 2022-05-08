import PropTypes from 'prop-types';
import s from './Section.module.css';

const Section = ({ children, type }) => {
  return <section className={s[type]}>{children}</section>;
};

Section.propTypes = {
  children: PropTypes.node,
};

export default Section;
