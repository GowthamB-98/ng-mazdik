import {Row} from './row';
import {Column} from './column';

export class Sequence {

  private uidRow: number = 0;

  setColumnIndexes(columns: Column[]): Column[] {
    let columnIndex = 0;
    columns.forEach(column => {
      if (!column.tableHidden) {
        column.index = columnIndex++;
      }
    });
    return columns;
  }

  setRowIndexes(rows: Row[]): Row[] {
    rows.forEach((row, i) => row.$$index = i);
    return rows;
  }

  getUidRow() {
    return ++this.uidRow;
  }

  curUidRow() {
    return this.uidRow;
  }

}
