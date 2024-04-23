export interface IDatabase {
  id: number;
  name: string;
  username: string;
  type: DataBaseType;
  url: string;
  password: string;
}

export interface IFormData {
  name: string;
  url: string;
  username: string;
  password: string;
  type: DataBaseType;
}

export enum DataBaseType {
  Snowflake = 'Snowflake',
  Trino = 'Trino',
  MySQL = 'MySQL',
}