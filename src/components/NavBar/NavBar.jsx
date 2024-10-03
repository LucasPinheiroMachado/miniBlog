import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

import { useAuthentication } from '../../hooks/useAuthentication';
import { useAuthValue } from '../../context/AuthContext';

const NavBar = () => {
  const { user } = useAuthValue();
  const { logOut } = useAuthentication();

  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.brand}>
        Mini <span>Blog</span>
      </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.active : styles.notActive
            }
          >
            Home
          </NavLink>
        </li>
        {!user && (
          <>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? styles.active : styles.notActive
                }
              >
                Entrar
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive ? styles.active : styles.notActive
                }
              >
                Cadastrar
              </NavLink>
            </li>
          </>
        )}
        {user && (
          <>
            <li>
              <NavLink
                to="/posts/create"
                className={({ isActive }) =>
                  isActive ? styles.active : styles.notActive
                }
              >
                Novo Post
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive ? styles.active : styles.notActive
                }
              >
                Dashboard
              </NavLink>
            </li>
          </>
        )}
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? styles.active : styles.notActive
            }
          >
            Sobre
          </NavLink>
        </li>
        {user && (
          <li>
            <button onClick={logOut}>Sair</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;