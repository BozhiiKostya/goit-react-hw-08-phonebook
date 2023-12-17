import { Link } from 'react-router-dom';
import { ContainerLogin } from './LoginPage.styled';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/operations/auth-operations';

const LoginPage = () => {
  const dispatch = useDispatch();

  const hendleSubmit = e => {
    e.preventDefault();

    const email = e.currentTarget.elements.userEmail.value;
    const password = e.currentTarget.elements.userPassword.value;

    dispatch(
      loginThunk({
        email,
        password,
      })
    );
  };
  return (
    <ContainerLogin>
      <h2 className="title-login">Log In</h2>
      <form className="form-login" onSubmit={hendleSubmit}>
        <input
          className="input-form-login"
          name="userEmail"
          type="email"
          placeholder="Enter your email"
          required
        />
        <input
          className="input-form-login"
          name="userPassword"
          type="password"
          placeholder="Enter your password"
          required
          minLength={6}
        />
        <button className="button-form-login" type="submit">
          Log in
        </button>
      </form>
      <div className="wrap-link-login">
        <Link className="link-login" to="/register">
          Register
        </Link>
        <Link className="link-login" to="/">
          Go back
        </Link>
      </div>
    </ContainerLogin>
  );
};

export default LoginPage;
