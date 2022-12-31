const express = require('express');
const app = express();
const path = require('path');
const port = 5000;

app.use(express.static(path.join(__dirname)));
app.get('/', (req, res) => {
    app.send("hello");
});

app.listen(port, () => {
    console.log(`server start on port ${port}`);
});
