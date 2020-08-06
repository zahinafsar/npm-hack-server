const app = require('express')();
const axios = require('axios')

app.post('/', (req, res) => {
    var random = Math.floor(Math.random() * 100)
    if (random > 70) {
        axios.post('https://api.netlify.com/build_hooks/5f2bd48fdbfb5e93a1458b0e')
    }
    res.send("ok")
})

const port = process.env.PORT || 3000

app.listen(port)