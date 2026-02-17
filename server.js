const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
app.use(cors());

app.get('/proxy', async (req, res) => {
    try {
        const response = await axios.get(req.query.url, {
            headers: { 'User-Agent': 'Mediapartners-Google' }, // You can edit this, I recommend keeping it
	// to Mediapartners-Google because that's allowed on a bunch of Google services.
            responseType: 'arraybuffer',
            validateStatus: () => true // Always return the body, even on error
        });
        res.set('Content-Type', response.headers['content-type']);
        res.send(response.data);
    } catch (error) {
        res.status(200).send(`Proxy Error: ${error.message}`);
    }
});
app.listen(3000, () => console.log('IMPORTANT: Do NOT close this tab if you want the server running!')),
app.listen(3000, () => console.log('Proxy active at http://localhost:3000')),
app.listen(3000, () => console.log('If you ran the file from VBS, which you should, a HTML tab will be opened shortly.'));
