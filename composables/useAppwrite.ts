import { Account, Client, Databases, Query } from 'appwrite';

interface AppwriteConfig {
  public: {
    appwriteUrl: string;
    appwriteProjectId: string;
  };
}

export const useAppwrite = () => {
  // Retrieve runtime configuration and ensure correct typing
  const config = useRuntimeConfig() as AppwriteConfig;

  // Initialize the Appwrite client
  const client = new Client();

  // Set Appwrite API endpoint and project ID
  const appwriteUrl: string = config.public.appwriteUrl;
  const appwriteProjectId: string = config.public.appwriteProjectId;

  if (!appwriteUrl || !appwriteProjectId) {
    throw new Error('Appwrite configuration is missing in runtime config.');
  }

  // Set endpoint and project for the Appwrite client
  client.setEndpoint(appwriteUrl).setProject(appwriteProjectId);

  // Initialize the Account service
  // Add more services - https://github.com/appwrite/sdk-for-web/tree/main/src/services
  const account = new Account(client);


  const databases = new Databases(client);
  const findQuacks = async (searchText: string) => {

    const response = await databases.listDocuments(
      '679a7f6d001d89327860',
      'games',
      searchText ? [Query.contains('name', searchText)] : []
    );
    return response
  }
  return {
    account,
    client,
    databases,
    queries: {
      findQuacks
    }
  };
};