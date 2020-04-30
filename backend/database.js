var sqlite3 = require('sqlite3').verbose()
//verbose modifier is to get extra information for debugging

var md5 = require('md5');
//MD5 is used to create a hash for stored passwords, avoiding to save plain text passwords.

//Foreign key support - do it in the sqlite3 cli
// Steps - open cli -> write sqlite3 -> then write the following command 
// PRAGMA foreign_keys = ON;

//Definition of the SQLite database file (DBSOURCE)
const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE userData (
            userId INTEGER PRIMARY KEY AUTOINCREMENT,
            userName text, 
            createDate TEXT DEFAULT CURRENT_TIMESTAMP,
            email text UNIQUE, 
            password text, 
            CONSTRAINT email_unique UNIQUE (email)
            )`,
        (err) => {
            if (err) {
                // Table already created
            }else{
                console.log('Inside the SQLite database.')
                // Table just created, creating some rows
                var insert = 'INSERT INTO userData (userName, email, password) VALUES (?,?,?)'
                db.run(insert, ["admin","admin@example.com",md5("admin123456")])
                db.run(insert, ["user","user@example.com",md5("user123456")])
                db.run(insert, ["abc","abc@example.com",md5("abc123456")])
                db.run(insert, ["xyz","xyz@example.com",md5("xyz123456")])
                db.run(insert, ["sneha","sneha@example.com",md5("sneha123456")])
                console.log('Users added in database.')
            }
        });  
        db.run(`CREATE TABLE revenueData (
            revenueId INTEGER PRIMARY KEY AUTOINCREMENT,
            revenueType text
            )`,
        (err) => {
            if (err) {
                // Table already created
            }else{
                // Table just created, creating some rows
                var insert = 'INSERT INTO revenueData (revenueType) VALUES (?)'
                db.run(insert, ["Direct"])
                db.run(insert, ["Social"])
                db.run(insert, ["Referral"])
            }
        });
        db.run(`CREATE TABLE earnings (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            timestamp TEXT TIMESTAMP,
            earningAmount INTEGER,
            userId INTEGER,
            revenueId INTEGER,
            CONSTRAINT fk_userData
            FOREIGN KEY (userId)
            REFERENCES userData(userId)
            ON UPDATE CASCADE
            ON DELETE CASCADE,
            CONSTRAINT fk_revenueData
            FOREIGN KEY (revenueId)
            REFERENCES revenueData(revenueId)
            ON UPDATE CASCADE
            ON DELETE CASCADE
        )`,
        (err) => {
            if(err) {
                //Table already created
            }
            else{
                //Table just created, creating some rows
                var insert = 'INSERT INTO earnings (timestamp, earningAmount, userId, revenueId) VALUES (?,?,?,?)'
                db.run(insert, [('2020-01-19 12:00:00'),"100",'1','1'])
                db.run(insert, [('2020-01-19 12:00:00'),"200",'1','2'])
                db.run(insert, [('2020-02-19 12:00:00'),"300",'1','3'])
                db.run(insert, [('2020-02-19 12:00:00'),"400",'2','2'])
                db.run(insert, [('2020-02-19 12:00:00'),"500",'2','2'])
            }
        });
    }
});


module.exports = db
