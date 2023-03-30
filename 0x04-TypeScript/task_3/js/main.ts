import { RowID, RowElement } from "./interface";
import * as CRUD from './crud';


const row : RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
}

//function to insert and upadate row
const newRowID: RowID = CRUD.insertRow(row);
const updatedRow : RowElement = { age: 23,...row}

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);