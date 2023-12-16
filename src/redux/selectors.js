import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contact;

export const selectFilter = state => state.filters;

// export const selectLoading = state => state.contacts.isLoading;

// export const selectError = state => state.contacts.error;

export const selectFilterContacts = createSelector(
  [selectContacts, selectFilter],
  (contact, filters) => {
    return contact.filter(({ name }) =>
      name.toLowerCase().includes(filters.toLowerCase().trim())
    );
  }
);
