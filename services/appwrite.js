// src/services/appwrite.js
import { Client, Account, Databases } from 'appwrite';

const client = new Client();


client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66eff2f30009a3d6ca97');


const account = new Account(client);
const databases = new Databases(client);

export { client, account, databases };