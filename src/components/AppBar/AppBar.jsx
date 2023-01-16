import { NavLink } from 'react-router-dom';
import css from './AppBar.module.css';

const AppBar = () => {
  return (
    <nav className={css.nav}>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="movies">Movies</NavLink>
    </nav>
  );
};

export default AppBar;
