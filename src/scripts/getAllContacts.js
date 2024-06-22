import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const getAllContacts = async () => {
  try {
    const dbInfo = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(dbInfo);
    return contacts;
  } catch (error) {
    console.log('Error has been occured: ', error);
    return [];
  }
};

await getAllContacts()
  .then((contacts) => console.log(contacts))
  .catch((error) => console.error(error));
