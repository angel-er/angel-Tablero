const express = require('express');
const app = express();
var path = require('path')

const port = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});


app.listen(port, () => console.log(`Server conect in ${port}`));