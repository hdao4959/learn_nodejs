const express = require('express');
const hdb = require('express-handlebars');
console.log(hdb.engine);

const app = express();
app.engine('handlebars', hdb.engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');
const port = 3001;

const morgan = require('morgan');
app.use(morgan('combined'));


app.get('/', (req, res) => {
    // res.send('Hello anh em')
    res.render('home')
});
app.get('/tintuc', (req, res) => {
    res.render('tintuc', {layout:false})
});

app.listen(port, () => {
    console.log('Đang chạy');
    
})