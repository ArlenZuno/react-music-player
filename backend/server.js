const express = require("express");
const app = express();
const port = process.argv[2] || 5000;

const songs = [
  {
    source: "/audio/oh-boy.mp3",
    title: "Oh Boy",
    description:
      "'Oh Boy' is the title of a number-one, Grammy-nominated hip hop single by rapper Cam'ron from his album Come Home with Me in 2002. It features rapper Juelz Santana.",
    id: 0,
    img: "/img/camron.jpg"
  },
  {
    source: "/audio/doo-wop.mp3",
    title: "Doo Wop",
    description:
      "'Doo Wop (That Thing)' is the debut solo single from Lauryn Hill. The song was released in 1998 as the lead single for her album The Miseducation of Lauryn Hill.",
    id: 1,
    img: "/img/lauryn.jpg"
  },
  {
    source: "/audio/just-friends.mp3",
    title: "Just Friends",
    description:
      "'Just Friends (Sunny)' is the first single from Musiq Soulchild's debut album Aijuswanaseing. It was released on August 29, 2000 as a 12\" single.",
    id: 2,
    img: "/img/musiq.jpg"
  }
];

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/bangers", (req, res) => {
  res.json( songs );
});

app.listen(port, function() {
  console.log(`listening on ${port}`);
  console.log("Press CTRL + C to stop server");
});
