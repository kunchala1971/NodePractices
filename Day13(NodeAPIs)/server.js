const http = require('http');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid'); 
const url = require('url');

const readData = () => {
  const data = fs.readFileSync('./data.json', 'utf-8');
  return JSON.parse(data);
};

const writeData = (data) => {
  fs.writeFileSync('./data.json', JSON.stringify(data, null, 2));
};


const parseBody = (req, callback) => {
  let body = '';
  req.on('data', chunk => (body += chunk));
  req.on('end', () => callback(JSON.parse(body)));
};


const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const method = req.method;
  const id = pathname.split('/')[2];


  if (pathname === '/users' && method === 'GET') {
    const users = readData();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(users));
  }


  else if (pathname.startsWith('/users/') && method === 'GET') {
    const users = readData();
    const user = users.find(u => u.id === id);
    if (user) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(user));
    } else {
      res.writeHead(404);
      res.end('User not found');
    }
  }


  else if (pathname === '/users' && method === 'POST') {
    parseBody(req, (body) => {
      const users = readData();
      const newUser = { id: uuidv4(), ...body };
      users.push(newUser);
      writeData(users);
      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(newUser));
    });
  }


  else if (pathname.startsWith('/users/') && method === 'PUT') {
    parseBody(req, (body) => {
      let users = readData();
      const index = users.findIndex(u => u.id === id);
      if (index !== -1) {
        users[index] = { id, ...body };
        writeData(users);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(users[index]));
      } else {
        res.writeHead(404);
        res.end('User not found');
      }
    });
  }


  else if (pathname.startsWith('/users/') && method === 'DELETE') {
    let users = readData();
    const filtered = users.filter(u => u.id !== id);
    if (users.length === filtered.length) {
      res.writeHead(404);
      res.end('User not found');
    } else {
      writeData(filtered);
      res.writeHead(204);
      res.end();
    }
  }


  else {
    res.writeHead(404);
    res.end('Route not found');
  }
});


server.listen(4000, () => {
  console.log('Server running on http://localhost:4000');
});
