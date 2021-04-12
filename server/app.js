const express = require('express');
const graphqlHTTP = require('express-graphql');

const app = express();

const port = 1234;

// app.use('/graphql', graphqlHTTP({

// }));

app.use('/graphql', graphqlHTTP({
    // pass in a schema property
}));

app.listen(port, () => {
    console.log(`listening requests on port ${port}`);
});