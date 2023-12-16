import { NavLink, Outlet } from 'react-router-dom';
import { AiOutlineUser, AiOutlineUserDelete } from 'react-icons/ai';
import { ContainerLayout } from './Layout.styled';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from 'redux/operations/auth-operations';

const Layout = () => {
  const dispatch = useDispatch();
  const authenticated = useSelector(state => state.auth.authenticated);
  const userName = useSelector(state => state.auth.user.name);

  return (
    <ContainerLayout>
      <header className="header-layout">
        <div>
          <NavLink className="nav-layout nav-home-layout" to="/">
            Home
          </NavLink>
          {authenticated && (
            <NavLink className="nav-layout nav-home-layout" to="/contacts">
              Contacts
            </NavLink>
          )}
        </div>
        <div>
          {!authenticated ? (
            <NavLink className="nav-layout nav-log" to="/login">
              <div className="nav-container-icon-layout">
                <AiOutlineUser />
                <span className="nav-span-layout">Log in</span>
              </div>
            </NavLink>
          ) : (
            <NavLink
              to="/"
              className="nav-layout nav-log"
              onClick={() => dispatch(logoutThunk())}
            >
              <div className="nav-container-icon-layout">
                <span>{`Welcome,${userName}`} </span> <AiOutlineUserDelete />
                <span className="nav-span-layout">Log out</span>
              </div>
            </NavLink>
          )}
        </div>
      </header>
      <main className="main-layout">
        <Outlet />
      </main>
      <footer className="footer-layout"></footer>
    </ContainerLayout>
  );
};

export default Layout;
