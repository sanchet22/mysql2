import mysql from "mysql2";

const connection = mysql.createConnection({
  host: "sql12.freesqldatabase.com",
  user: "sql12737060",
  password: "mLugmZtXpC",
  database: "sql12737060",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the MySQL database.");
});

export default connection;
