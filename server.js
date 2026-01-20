require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const connectDB = require('./config/connection');
const userRoutes = require('./routes/userRoutes');


//middleware
app.use(express.json());
app.use(express.urlencoded({extended :true }));

//connect to DB
connectDB();

app.get('/', (req, res) =>{
    res.send('<h1>Innovate Inc</h1>');

})

//routes
app.use('/api/users', userRoutes);

app.listen(PORT, ()=>{
    console.log(`Server is running on port: &{PORT}`);
});