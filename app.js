const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// use imported routes
// app.use('api/v1/', routes);

app.get('/', (req, res) => {
	res.send('Welcome to the API');
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Tune in to port: ${port} on Localhost or IP:127.0.0.1`);
});
