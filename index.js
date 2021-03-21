const express = require('express');
const app = express();

// App Use
app.use(express.json());
app.use(express.static("public"));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Main
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/views/home.html");
});

// Routes Example
const contact = require(__dirname + "/routes/contact");
app.use('/contact', contact);

const profile = require(__dirname + "/routes/profile");
app.use("/profile", profile);

// Error Pages
app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + "/views/error.html")
})

const PORT = process.env.PORT || 4503;
app.listen(PORT, () => {
    console.log(`App run on port ${PORT}`);
})