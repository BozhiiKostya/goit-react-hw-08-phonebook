import { Link } from 'react-router-dom';
import { ContainerRegister } from './RegisterPage.styled';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/operations/auth-operations';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const hendleSubmit = e => {
    e.preventDefault();

    const name = e.target.elements.userName.value;
    const email = e.target.elements.userEmail.value;
    const password = e.target.elements.userPassword.value;

    dispatch(
      registerThunk({
        name,
        email,
        password,
      })
    );
    e.target.reset();
  };
  return (
    <ContainerRegister>
      <h2 className="title-register">Create account</h2>
      <form className="form-register" onSubmit={hendleSubmit}>
        <input
          className="input-form-register"
          name="userName"
          type="text"
          placeholder="Enter your name"
          required
        />
        <input
          className="input-form-register"
          name="userEmail"
          type="email"
          placeholder="Enter your email"
          required
        />
        <input
          className="input-form-register"
          name="userPassword"
          type="password"
          placeholder="Enter your password"
          minLength={6}
          required
        />
        <button className="button-form-register" type="submit">
          Sign up
        </button>
      </form>
      <div className="wrap-link-register">
        <Link className="link-register" to="/">
          Go back
        </Link>
      </div>
    </ContainerRegister>
  );
};

export default RegisterPage;
