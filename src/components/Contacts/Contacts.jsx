// import {
//   StyledButton,
//   StyledItem,
//   StyledList,
//   StyledText,
// } from './Contacts.styled';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { deleteContact, fetchContacts } from 'redux/operations/auth-operations';
// import {
//   selectError,
//   selectFilterContacts,
//   selectLoading,
// } from 'redux/selectors';

// export const Contacts = () => {
//   const isLoading = useSelector(selectLoading);
//   const error = useSelector(selectError);

//   const FilterContacts = useSelector(selectFilterContacts);

//   return (
//     <StyledList>
//       {isLoading && !error && <b>Request in progress...</b>}

//       {FilterContacts.map(({ id, name, phone }) => {
//         return (
//           <StyledItem key={id}>
//             <StyledText>{name + ': ' + phone}</StyledText>
//             <StyledButton onClick={() => {}}>Delete</StyledButton>
//           </StyledItem>
//         );
//       })}
//     </StyledList>
//   );
// };
