import PropTypes from 'prop-types';
import s from './Header.module.css';

const Header = ({ logoImg }) => {
  return (
    <header className={s.header}>
      <div className="container">
        <nav className={s.nav}>
          <ul className={s.list}>
            <li className={s.item}>
              <a href="/" className={s.link}>
                About
              </a>
            </li>
            <li className={s.item}>
              <a href="/" className={s.link}>
                Gallery
              </a>
            </li>
          </ul>
          <a href="/">
            <img src={logoImg} alt="Logo" width="100" />
          </a>
          <ul className={s.list}>
            <li className={s.item}>
              <a href="/" className={s.link}>
                Blog
              </a>
            </li>
            <li className={s.item}>
              <a href="/" className={s.link}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

Header.propTypes = {
  logoImg: PropTypes.string.isRequired,
};

export default Header;
