import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de usuários')

    response.json([
        'Antônio',
        'Michael',
        'Farias',
        'Soares'
    ]);
});

app.listen(3333);