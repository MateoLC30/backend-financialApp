import { connect } from "../database.js";

export const getUsers = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM users');
    res.json(rows);
}

export const getUser = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM users WHERE id = ?', [ 
        req.params.userId,
    ]);
    res.json(rows[0])
    console.log(rows);
}

export const updateUser = async (req, res) => {
    const connection = await connect();
    const result = await connection.query('UPDATE users SET ? WHERE id = ?', [
        req.body,
        req.params.userId,
    ]);
    console.log(result);
    res.sendStatus(204)
}

export const createUser = async (req, res) => {
    const connection = await connect();
    const result = await connection.query('INSERT INTO users (userName, name, password, email) VALUES (?,?,?,?)', [
        req.body.userName,
        req.body.name,
        req.body.password,
        req.body.email
    ]);
    console.log(result);
    res.send('new user')
};

export const deleteUser = async (req, res) => {
    const connection = await connect();
    const result = await connection.query('DELETE FROM users WHERE id = ?', [
        req.params.userId
    ])
    res.sendStatus(204)
}
