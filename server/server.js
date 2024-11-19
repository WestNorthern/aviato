const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = {
    origin: "http://localhost:5173"
};

app.use(cors(corsOptions));

app.get("/api", (req, res) => {
    res.json({ fruits: ["apple", "orange", "banana"] });
});

app.listen(9090, () => {
    console.log("server started on port 9090");
});