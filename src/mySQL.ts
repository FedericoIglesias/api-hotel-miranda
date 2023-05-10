import mysql from "mysql2/promise";

const configDB = {
  host: "localhost",
  user: "root",
  password: "1234",
  database: "hotel_miranda",
};

export const callDB = async (query: string, params?: (string | number)[]) => {
  const connection = await mysql.createConnection(configDB);
  const [resp] = await connection.execute(query, params);
  console.log(resp);
  
  return resp;
};
