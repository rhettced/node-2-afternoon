const express = require('express');
const ctrl = require('./controller/messages_controller');
const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));

//endpoints
app.get(`/api/messages`,ctrl.read);
app.post(`/api/messages`,ctrl.create);
app.put(`/api/messages/:id`,ctrl.update);
app.delete(`/api/messages/:id`,ctrl.delete);

app.listen(3001, () => console.log('Server running on 3001'));