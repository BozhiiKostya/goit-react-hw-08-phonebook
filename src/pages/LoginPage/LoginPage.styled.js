import styled from 'styled-components';

export const ContainerLogin = styled.div`
  .logo {
    display: block;
    width: 60px;
    height: 60px;
    background-color: #ff7f50;
  }
  .title-login {
    color: #ff7f50;
    padding: 10px 0;
  }

  .form-login {
    max-width: 350px;
    display: flex;
    flex-direction: column;
  }

  .input-form-login {
    border: 2px solid #2c2c2c;
  }

  .input-form-login,
  .button-form-login {
    width: 100%;
    padding: 6px 10px;
    box-sizing: border-box;
    font-size: 16px;
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }

  .button-form-login {
    background-color: #2c2c2c;
    color: #fff;
    transition: color 200ms cubic-bezier(0.4, 0, 0.2, 1),
      background-color 200ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      background-color: #ff7f50;
      color: #fff;
    }
  }
  .wrap-link-login {
    display: flex;
    flex-direction: column;
  }

  .link-login {
    margin-top: 15px;
  }
`;
