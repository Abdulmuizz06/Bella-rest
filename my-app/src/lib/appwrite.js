// Appwrite client initializer
import { Client, Account, Databases, Storage } from 'appwrite';

const client = new Client()
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT || 'https://fra.cloud.appwrite.io/v1')
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID || '68f625210013706c1d27');

const account = new Account(client);
const databases = new Databases(client);
const storage = new Storage(client);


export { client, account, databases, storage };
