class Database {
  static exists: boolean;

  static instance: any;

  data: string;

  constructor(data) {
    if (Database.exists) {
      return Database.instance;
    }

    Database.instance = this;
    Database.exists = true;

    this.data = data;
  }

  getData(): string {
    return this.data;
  }
}

const mongo = new Database('MongoDB');

console.log(mongo.getData());

const mysql = new Database('MySQL');

console.log(mysql.getData());
