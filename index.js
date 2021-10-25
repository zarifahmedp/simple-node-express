const express = require('express')
const cors=require('cors')
const app = express()
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('i am displaying a text from index js that means i am learning node jsssss ....')
})

app.post('/users',(req,res)=>{
const newUser=req.body;
newUser.id=users.length;
users.push(newUser)
   res.json(newUser)//we are sending new user so that we can see this on our website
})

app.get('/users',(req,res)=>{
    const search=req.query.search ;
    if(search){
        const searchResult=users.filter(user=>user.name.toLocaleLowerCase().includes(search))
        res.send(searchResult)
    }
    else{
        res.send(users)
    }
})


app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user)
})

const users = [
    { id: 0, name: 'gigi hadid', email: 'gigi_hadid@gmail.com', contact: '+161560304975' },
    { id: 1, name: 'anne marie', email: 'anne_maire@gmail.com', contact: '+16156030947056' },
    { id: 2, name: 'selina gomez', email: 'selina_gomez@gmail.com', contact: '+161560306586' },
    { id: 3, name: 'ema stone', email: 'ema_stone@gmail.com', contact: '+161560379351' },
    { id: 4, name: 'billie eilish', email: 'billie_eilish@gmail.com', contact: '+161560384927' },
]

app.listen(port, () => {
    console.log('listening to port', port);
})
