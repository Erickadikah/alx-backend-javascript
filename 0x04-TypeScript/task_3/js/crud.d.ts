import { RowID, RowElement } from './interface'; //type declaration

export declare function insertRow(row: RowElement): RowID;

export declare function deleteRow(rowId: RowID): void;

export declare function updateRow(rowId: RowID, row: RowElement): RowID;