const bodyParser = require("body-parser");
const { UsersTable } = require('../../src/backend/user.model');
const { createSqlConnection } = require('./user');
const usersRouter = require('./user.model');

usersRouter.use(bodyParser.json());

usersRouter.post('/login', function(req, res) {
    const login = req.body.login;
    const password = req.body.password;
    const sqlConnection = createSqlConnection();
    const users = UsersTable(sqlConnection);
    let status = 'succsess';

    users.findAll( { where: {
        login,
        password
    }}).then(res => {
        if(res[0] === undefined)
          status = 'deied';
        sqlConnection.close();
        res.send(status);
      });

})

module.exports = usersRouter;