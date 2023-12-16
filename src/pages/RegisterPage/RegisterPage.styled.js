import styled from 'styled-components';

export const ContainerRegister = styled.div`
  .title-register {
    color: #ff7f50;
    padding: 10px 0;
  }

  .form-register {
    max-width: 350px;
    display: flex;
    flex-direction: column;
  }

  .input-form-register {
    border: 2px solid #2c2c2c;
  }

  .input-form-register,
  .button-form-register {
    width: 100%;
    padding: 6px 10px;
    box-sizing: border-box;
    font-size: 16px;
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }

  .button-form-register {
    background-color: #2c2c2c;
    color: #fff;
    transition: color 200ms cubic-bezier(0.4, 0, 0.2, 1),
      background-color 200ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      background-color: #ff7f50;
      color: #fff;
    }
  }
  .wrap-link-register {
    display: flex;
    flex-direction: column;
  }

  .link-register {
    margin-top: 15px;
  }
`;
