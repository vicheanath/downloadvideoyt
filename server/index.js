const fs = require('fs');
const ytdl = require('ytdl-core');
const express = require('express');
const app = express();
const port = 8000;
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.get('/', (req, res) => {
    res.send('Hello World!')
})



app.get('/video', function (req, res) {
    const videoID = 'IHNzOHi8sJs';
    const Info = async (id) => {
        let info = await ytdl.getInfo(id);
        return res.status(200).json(info);
    }
    Info(videoID);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})



// const downloadVideo = (videoID) => {
//     ytdl(`http://www.youtube.com/watch?v=${videoID}`)
//         .pipe(fs.createWriteStream(`video/${id}.mp4`));
// }



