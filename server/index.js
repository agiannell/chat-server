const express = require('express');
const msgCtrl = require('./controllers/messages_controller');
const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));

app.post('/api/messages', msgCtrl.createMessage)
app.get('/api/messages', msgCtrl.readMessage)
app.put('/api/messages/:id', msgCtrl.updateMessage)
app.delete('/api/messages/:id', msgCtrl.deleteMessage)


const port = 3001;
app.listen(port, () => console.log(`Listening on port ${port}`));