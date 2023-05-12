import { OkPacket } from "mysql";
import mysql, { ResultSetHeader, RowDataPacket } from "mysql2/promise";

const configDB = {
  host: "localhost",
  user: "root",
  password: "1234",
  database: "hotel_miranda",
};

export async function callDB<T extends RowDataPacket[] | OkPacket >(
  query: string,
  params?: (string | number)[]
): Promise<T> {
  const connection = await mysql.createConnection(configDB);
  const [resp]: any = await connection.execute( query, params );
  console.log(resp);

  return resp;
}
