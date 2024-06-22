import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

const generateContacts = async (number) => {
  try {
    const contacts = await fs.readFile(PATH_DB, 'utf8');

    let parsedContacts = [];

    if (contacts) {
      parsedContacts = JSON.parse(contacts);
    }

    const newContacts = Array.from({ length: number }, createFakeContact);

    const updatedContacts = JSON.stringify([...parsedContacts, ...newContacts]);
    await fs.writeFile(PATH_DB, updatedContacts);
  } catch (error) {
    console.error('Error reading contacts:', error);
  }
};

generateContacts(5);
