import styled from 'styled-components';

export const ContainerLayout = styled.div`
  width: 100vw;
  max-width: 1300px;
  min-height: 500px;
  margin: 0 auto;
  font-size: 20px;
  border-radius: 5px;

  .header-layout {
    padding: 15px 30px;
    background-color: #2c2c2c;
    display: flex;
    justify-content: space-between;
  }

  .nav-layout {
    color: #fff;
    transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      color: #ffd700;
    }
  }

  .nav-layout.nav-home-layout:not(:last-child) {
    margin-right: 15px;
  }

  .nav-layout.nav-log:not(:last-child) {
    margin-right: 10px;
  }
  .nav-container-icon-layout {
    display: inline-flex;
    align-items: center;
  }
  .nav-span-layout {
    margin-left: 15px;
    color: inherit;
  }

  .main-layout {
    position: relative;
    width: 100%;
    min-height: 450px;
    box-sizing: border-box;
    background: linear-gradient(
      to right,
      #fff 700px,
      #ffd700 800px,
      #ff7f50 900px,
      #fff 1000px,
      #ffd700 1100px,
      #ff7f50 1200px,
      #fff 1300px
    );
  }

  .footer-layout {
    width: 100%;
    height: 60px;
    background-color: #2c2c2c;
  }
`;
