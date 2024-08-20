const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', (request, response) => {
    response.send("<h3>This is a coinflip API.</h3> <p>Access <b>/once</b> for one flip or <b>/coins?coins=[desired amount]</b> for more flips. Enjoy!</p style={{fontSize: 12}}>");
});   

app.get('/coins', (request, response) => {
    const coins = request.query.coins;
    if(coins && coins > 0) {
        let heads = 0;
        let tails = 0;
        for(let i = 0; i<coins; i++){
            const randomNumber = Math.random();
            if(randomNumber < 0.5){
                heads++;
            } else {
                tails++;
            }  
        }
        response.json({heads: heads, tails: tails, state: "OK"});
    } else {
        response.json({message: 'Include number of coins', state: "ERROR"});
    } 
});   

app.get('/once', (request, response) => {
    const randomNumber = Math.random();
    let coinValue = '';
    if(randomNumber < 0.5){
        coinValue = 'heads';
    } else {
        coinValue = 'tails';
    }
    response.json({value: coinValue, state: "OK"})
}); 

app.listen(5000, () => {
    console.log('Started server. Listening on port 5000');
});
