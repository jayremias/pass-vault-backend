import { Connection, createConnection, getConnectionOptions } from 'typeorm';

export default async (host = '0.0.0.0'): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();
  return createConnection(
    Object.assign(defaultOptions, {
      host: process.env.NODE_ENV ? 'localhost' : host,
      database:
        process.env.NODE_ENV === 'test'
          ? 'pass-vault-test'
          : defaultOptions.database,
    })
  );
};
