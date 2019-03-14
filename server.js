const express = require('express');
const Sniffr = require("sniffr");

const app = express();



app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  ];
  res.json(customers);
});

app.get('/', (req, res) => {
  let id = req.query.id;
  let subaff = req.query.subaff;
  const userParams = {
    subaff,
    id
  }
  res.json(userParams);
});

app.get('/userData', (req, res) => {


  var sniffrData = new Sniffr();
  let clientIp = req.connection.remoteAddress;
  let clientUserAgent = req.headers['user-agent'];

  sniffrData.sniff(clientUserAgent);

  let userData = {
    clientIp,
    clientUserAgent,
    clientOsName: sniffrData.os.name,
    clientOsVersion: sniffrData.os.versionString,
    clientBrowserName: sniffrData.browser.name,
    clientBrowserVersion: sniffrData.browser.versionString
  }
  res.json(userData);
})



const port = 5000;

app.listen(port, () => `Server running on port ${port}`);