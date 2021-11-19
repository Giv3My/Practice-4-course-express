const user = require('./models/UserModel');

module.exports = (app) => {
    app.get('/', (req, res) => {
        user.find((err, users) => {
            if (err) res.send(err);

            res.json(users);
        });
    });

    app.post('/', (req, res) => {
        user.find((err, users) => {
            if (err) res.send(err);

            res.json(users.length);
        });
    });
}
