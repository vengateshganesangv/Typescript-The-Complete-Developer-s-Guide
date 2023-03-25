import fs from "fs";

export class CsvFileReader {
  data: string[][] = [];

  constructor(public filename: string) {}

  read(): void {
    //csv file encoded with utf-8 format
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      });
  }
}
