import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export const Navigation = () => {
  return (
    <nav>
      <NavLink to="/" className={s.current} activeclassname={s.active}>
        Home
      </NavLink>
      <NavLink to="/" className={s.current} activeclassname={s.active}>
        Movies
      </NavLink>
    </nav>
  );
};
