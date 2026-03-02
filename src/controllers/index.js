const path = require('path');

// There is no reason for the name here except an arbitary example
// of updating the server data based on a client request.
let name = 'unknown';

const hostIndex = (req, res) => {
  return res.sendFile(path.resolve(`${__dirname}/../../views/index.html`));
};

const hostPage1 = (req, res) => {
  return res.sendFile(path.resolve(`${__dirname}/../../views/page1.html`));
};

const hostPage2 = (req, res) => {
  return res.sendFile(path.resolve(`${__dirname}/../../views/page2.html`));
};

const notFound = (req, res) => {
  return res.status(404).sendFile(path.resolve(`${__dirname}/../../views/404.html`));
}

const getName = (req, res) => {
  return res.json({ name });
}

const setName = (req, res) => {
  console.log(req.body);
  if(!req.body.firstName || !req.body.lastName) {
    return res.status(400).json({ 
      error: "Missing firstName or lastName",
      id: "setNameMissingParams", 
    });
  }
  name = `${req.body.firstName} ${req.body.lastName}`;
  return res.json({ name });
}


module.exports = {
  index: hostIndex,
  page1: hostPage1,
  page2: hostPage2,
  notFound, 
  getName,
};