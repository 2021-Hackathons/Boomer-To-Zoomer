const express = require("express");
const app = express();
const path = require("path");
const cors = require('cors')

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { MONGODB } = require('./config/dev');


const mongoose = require("mongoose");
mongoose
  .connect(MONGODB, { useNewUrlParser: true,  useUnifiedTopology: true, useCreateIndex: true  })
  .then(() => {
    console.log('MongoDB Connected');
  })
  .then((res) => {
    console.log(`Server running at ${port}`);
  })
  .catch(err => {
    console.error(err)
  })

  io.on('connection', (socket) => {
    Msg.find().then(result => {
        socket.emit('output-messages', result)
    })
    console.log('a user connected');
    socket.emit('message', 'Hello world');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    socket.on('chatmessage', msg => {
        const message = new Msg({ msg });
        message.save().then(() => {
            io.emit('message', msg)
        })
      })
    });
    

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/api/users', require('./routes/users'));
app.use('/uploads', express.static('uploads'));


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server Listening on ${port}`)
});
