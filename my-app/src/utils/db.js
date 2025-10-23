import { tablesDB } from "../lib/appwrite";
import { ID } from "appwrite";

export const createRows = async (tableId, data) => {
  const response = await tablesDB.createRow({
    databaseId: import.meta.env.VITE_DB_ID,
    tableId: tableId,
    rowId: ID.unique(),
    data: data,
  });
  return response;
};