const app = require('express')();
const axios = require('axios')

app.post('/deploy', (req, res) => {
    var random = Math.floor(Math.random() * 100);
    if (random < 70) {
        axios.post('https://api.netlify.com/build_hooks/5f2bd48fdbfb5e93a1458b0e')
    }
    res.send("ok  " + random)
})
app.post('/dev', (req, res) => {
    axios.post('https://api.netlify.com/build_hooks/5f2bd48fdbfb5e93a1458b0e')
    res.send("ok")
})
app.get('/', (req, res) => {
    res.send("ok")
})

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log("server running on port " + port)
})
