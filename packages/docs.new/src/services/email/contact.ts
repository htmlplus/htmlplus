import axios from 'axios';
import * as Constants from '@app/constants';

const getId = (input) => Constants[`SENDINBLUE_${input.toUpperCase()}_ID`];

export const addContact = (list: string, email: string) => {
  return new Promise((resolve, reject) => {
    axios(`${Constants.SENDINBLUE_BASE_API}contacts`, {
      headers: {
        'api-key': Constants.SENDINBLUE_API_KEY,
      },
      method: 'POST',
      data: {
        email,
        listIds: [getId(list)],
      },
    })
      .then((response) => resolve(response))
      .catch(({ response: error }) => {
        if (error.status === 400
          && error.data.code === 'duplicate_parameter'
          && error.data.message === 'Contact already exist'
        ) {
          addContactToList(list, email)
            .then(response => resolve(response))
            .catch(error => reject(error));
        } else {
          reject(error);
        }
      })
  })
};

export const addContactToList = (list: string, email: string) => {
  return new Promise((resolve, reject) => {
    axios(`${Constants.SENDINBLUE_BASE_API}contacts/lists/${getId(list)}/contacts/add`, {
      headers: {
        'api-key': Constants.SENDINBLUE_API_KEY,
      },
      method: 'POST',
      data: {
        emails: [email],
      },
    })
      .then((response) => resolve(response))
      .catch(({ response: error }) => {
        if (error.status === 400
          && error.data.code === 'invalid_parameter'
          && error.data.message === 'Contact already in list and/or does not exist'
        ) {
          reject({
            ...error,
            // reason: 'DUPLICATE_'
          });
        } else {
          reject(error);
        }
      });
  })
};
