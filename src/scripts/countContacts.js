import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const countContacts = async () => {
  try {
    const dbFile = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(dbFile);
    return contacts.length;
  } catch (error) {
    console.log('An error has been occured: ', error);
    return 0;
  }
};

countContacts()
  .then((count) => {
    console.log(`Contacts count: ${count}`);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
