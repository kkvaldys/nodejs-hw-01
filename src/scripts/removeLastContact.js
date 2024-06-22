import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeLastContact = async () => {
  try {
    const dbFile = await fs.readFile(PATH_DB, 'utf-8');
    const dbData = JSON.parse(dbFile);
    if (dbData.length > 0) {
      dbData.pop();
      await fs.writeFile(PATH_DB, JSON.stringify(dbData, null, 2));
      console.log('Last contact has been deleted!');
    } else {
      console.log('Error, no contacts to be deleted!');
    }
  } catch (error) {
    console.log('Error: ', error);
  }
};

removeLastContact();
