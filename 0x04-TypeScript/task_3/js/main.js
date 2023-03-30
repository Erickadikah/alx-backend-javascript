"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
export const __esModule = true;
import { insertRow, updateRow, deleteRow } from "./crud";
var row = {
    firstName: 'Guillaume',
    lastName: 'Salva'
};
//function to insert and upadate row
var newRowID = insertRow(row);
var updatedRow = __assign({ age: 23 }, row);
updateRow(newRowID, updatedRow);
deleteRow(newRowID);
