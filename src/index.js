import express from 'express'
import bodyParser from 'body-parser'
import { postComment } from './controllers'
import makeCallback from './callback'

const app = express()
const apiRoot = 'http://localhost:3000/'

app.use(bodyParser.json())
app.post('/post-comment', makeCallback(postComment));
app.get('/hello', ()=>{
    console.log("hello");
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000')
})

export default app