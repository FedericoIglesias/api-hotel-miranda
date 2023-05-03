import express from 'express'
import router from './routes/rooms'


const app = express()

app.use( express.json( ))

const port: number = 3000

app.get( '/', (_req , res) => {
    console.log('hi, i am the server ');
    res.send('UwU 2.0 ...')
})

app.use('/rooms', router)

app.listen( port ,() => {
    console.log(`Server run in the port ${port}` );
    
})