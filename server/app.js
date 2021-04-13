const express = require('express');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const schema = require('./schema/schema');

const app = express();

const port = 1234;

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(port, () => {
    console.log(`listening requests on port ${port}`);
});