const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({path:'./config.env'})
const app = require('./app')

// console.log("Hello "+process.env.DATABASE
const DB = process.env.DATABASE.replace(
    'PASSWORD',
    process.env.DATABASE_PASSWORD,
)
const local_DB = process.env.DATABASE_LOCAL
mongoose.connect(local_DB).then((con)=>{
    // console.log(con.connections)
    console.log('DB connection successful')
}).catch(error=>console.log(error));

app.get("/", function(req,res){
    res.send("hello world, This is pride");
});

// starting the server on port 3000
const port = 3000
app.listen(port, function(){
    console.log(`server running at port ${port}`);
})