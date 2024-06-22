import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

export const addOneContact = async () => {
  try {
    const contact = createFakeContact();
    const dbFile = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(dbFile);
    contacts.push(contact);
    const updateDb = JSON.stringify(contacts, null, 2);
    await fs.writeFile(PATH_DB, updateDb);
    console.log('db sucsessfully updated!');
  } catch (error) {
    console.log('Error has been occured:', error);
  }
};

addOneContact();
