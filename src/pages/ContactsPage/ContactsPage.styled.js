import { styled } from 'styled-components';

export const ContainerContacts = styled.div`
  .list-contacts {
    list-style-type: none;
  }
  .item-contacts {
    margin-bottom: 10px;
    min-width: 300px;
    display: flex;
    align-items: center;
    width: 450px;
  }
  .text-contacts {
    width: 100%;
    display: inline-flex;
    font-size: 18px;
  }
  .text-contacts span:not(:last-child) {
    min-width: 225px;
  }

  .btn-contacts {
    width: 35px;
    height: 35px;
    box-sizing: border-box;
    margin-left: auto;
    padding: 4px 4px;
    display: inline-block;
    border-radius: 3px;
    font-size: 16px;
    &:hover {
      background-color: #ff7f50;
      color: #ffffff;
    }
  }
`;

export const StyledItem = styled.li`
  margin-bottom: 10px;
  min-width: 300px;
`;

export const StyledText = styled.p`
  display: inline-block;
  width: 280px;
  font-size: 18px;
`;

export const StyledButton = styled.button`
  margin-left: auto;
  padding: 4px 8px;
  display: inline-block;
  border-radius: 3px;
  font-size: 16px;
  &:hover {
    background-color: #e74c3c;
    color: #ffffff;
  }
`;
