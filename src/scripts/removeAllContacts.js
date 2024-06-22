import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, '[]');
    console.log('All data has been removed successfully!');
  } catch (error) {
    console.log('An error has been occured:', error);
    return 0;
  }
};

removeAllContacts();
