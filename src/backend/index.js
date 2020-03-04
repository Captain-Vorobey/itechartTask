const usersRouter = require('./user');
const apiRouter = require('./express');
const cors = require('cors');

const host = `127.0.0.1`;
const port = 3000;

const { createSqlConnection } = require('./user.model');

const sqlConnection = createSqlConnection();
sqlConnection.sync( {force: true} )
.catch(e => console.log(`Sync error: ${e.message}`));

app.use(cors());
apiRouter.use('/users', usersRouter);
app.use(`/backend`, apiRouter);

app.listen(host, port, () => {
    console.log(`\nServer started ${port}:${host} at ${new Date()}\n`)
});