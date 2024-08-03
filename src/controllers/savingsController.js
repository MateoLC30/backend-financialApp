import { connect } from "../database.js";

export const getSavings = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM savings WHERE user_id = ?', [
        req.params.userId
    ])
    res.json(rows)
    res.send('savings')
}

export const getSaving = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM savings WHERE user_id = ? AND id = ?', [
        req.params.userId,
        req.params.id
    ])
    console.log(rows);
    res.json(rows[0])
}

export const updateSaving = async (req, res) => {
    const connection = await connect();
    const result = await connection.query('UPDATE savings SET ? WHERE user_id = ? AND id = ?', [
        req.body,
        req.params.userId,
        req.params.savingId
    ])
    console.log(result);
    res.sendStatus(204)
}

export const createSaving = async (req, res) => {
    const connection = await connect();
    const result = connection.query('INSERT INTO savings (date, description, entity, annual_interest, user_id) VALUES (?,?,?,?,?,?)', [
        req.body.date,
        req.body.description,
        req.body.entity,
        req.body.annual_interest,
        req.params.userId
    ])
    console.log(result);
    res.send('new saving')
}

export const deleteSaving = async (req, res) => {
    const connection = await connect();
    const result = connection.query('DELETE FROM savings WHERE user_id = ? AND id = ?', [
        req.params.userId,
        req.params.savingId
    ])
    console.log(result);
    res.sendStatus(204)
}

