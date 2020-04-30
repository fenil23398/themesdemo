//Create express app
var express = require('express');
var app = express();
var cors = require('cors')

//Server port
// var port = 5000;
const PORT = process.env.PORT || 5000;

var db = require("./database.js")
var md5 = require("md5")

var bodyParser = require('body-parser');

//Enabling CORS
app.use(cors())

//mounts BodyParser as middleware - every request passes through it
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Start server
// app.listen(port, function () {
//     console.log('App started on port ' + port);
// });
app.listen(PORT, () => {
    console.log(`Our app is running on port ${PORT}`);
});


app.get('/', (req, res) => {
    res.send('Hello!');
});


//get a list of users
app.get("/users", (req, res, next) => {
    console.log("Inside get api users")
    var sql = "select * from userData"
    var params = []
    db.all(sql, params, (err, rows) => {
        console.log("Accesing users data db")
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({
            // "message":"success",
            "data": rows
        })
    });
});

//api to check revenue data
app.get("/revenues", (req, res, next) => {
    var sql = "select * from revenueData"
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({
            // "message":"success",
            "data": rows
        })
    });
});

//API to check earnings table data
app.get("/earnings", (req, res, next) => {
    var sql = "select * from earnings"
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({
            // "message":"success",
            "data": rows
        })
    });
});


//get a single user by id
app.get("/users/:userId", (req, res, next) => {
    var sql = "select * from userData where userId = ?"
    var params = [req.params.userId]
    db.get(sql, params, (err, row) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({
            // "message":"success",
            "data": row
        })
    });
});

//Creating a new user
app.post("/postFormData/", (req, res, next) => {
    var errors = []
    if (!req.body.password) {
        errors.push("No password specified");
    }
    if (!req.body.email) {
        errors.push("No email specified");
    }
    if (errors.length) {
        res.status(400).json({ "error": errors.join(",") });
        return;
    }
    var data = {
        userName: req.body.userName,
        email: req.body.email,
        password: md5(req.body.password)
    }
    var sql = 'INSERT INTO userData (userName, email, password) VALUES (?,?,?)'
    var params = [data.userName, data.email, data.password]
    db.run(sql, params, function (err, result) {
        if (err) {
            res.status(400).json({ "error": err.message })
            return;
        }
        res.json({
            // "message": "success",
            "data": data,
            "userId": this.lastID
        })
    });
})

//POST API for add income form
app.post('/addIncomeForm/', (req, res, next) => {
    var errors = []
    if (!req.body.timestamp) {
        errors.push("No Date specified");
    }
    if (!req.body.userId) {
        errors.push("No User Id specified");
    }
    if (!req.body.revenueId) {
        errors.push("Revenue Id not specified");
    }
    if (!req.body.earningAmount) {
        errors.push("Earning Amount not specified");
    }
    if (errors.length) {
        res.status(400).json({ "errors": error.join(",") });
    }
    var data = {
        timestamp: req.body.timestamp,
        userId: req.body.userId,
        revenueId: req.body.revenueId,
        earningAmount: req.body.earningAmount
    }
    var sql = 'INSERT INTO earnings (timestamp, userId, revenueId, earningAmount) VALUES (?,?,?,?)'
    var params = [data.timestamp, data.userId, data.revenueId, data.earningAmount]
    db.run(sql, params, function (err, result) {
        if (err) {
            res.status(400).json({ "error": err.message })
            return;
        }
        res.json({
            "data": data
        })
    });
})

//GET API to return monthwise earnings
app.get("/getMonthwiseEarnings/:userId", (req, res, next) => {
    var sql = "SELECT strftime('%m', timestamp) AS month, SUM(earningAmount) AS earningSum FROM earnings WHERE userId = ? GROUP BY month"
    var params = [req.params.userId]
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({
            // "message":"success",
            "data": rows
        })
    });
})

//GET API to get revenue type
app.get('/getRevenueData/:userId', (req, res, next) => {
    var sql = "SELECT revenueType AS name, SUM(earningAmount) AS earningSum FROM revenueData CROSS JOIN earnings ON earnings.revenueId = revenueData.revenueId WHERE userId = ? GROUP BY name"
    var params = [req.params.userId]
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({
            "data": rows
        })
    });
})