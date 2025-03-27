import { connect } from "../database.js";

export const getSavings = async (req, res) => {
try {
    const connection = await connect();

    const [rows] = await connection.query('SELECT * FROM savings WHERE userId = ?', [
        req.params.userId
    ]);
    res.json(rows)
} catch (error) {
    console.log("Error: ", error)
    res.status(500).json({ error: 'Error en la consulta' });
}};


export const getSaving = async (req, res) => {
try {
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM savings WHERE userId = ? AND id = ?', [
        req.params.userId,
        req.params.id
    ])
    console.log(rows);
    res.json(rows[0])
} catch (error) {
    console.log("Error: " + error);
    res.sendStatus(500);
}}

    


export const updateSaving = async (req, res) => {
try {
    const connection = await connect();
    const result = await connection.query('UPDATE savings SET amount = ?, annualInterest = ?, entity = ?, date = ? WHERE userId = ? AND id = ?', [
        req.body.amount,
        req.body.annualInterest,
        req.body.entity,
        req.body.date,
        req.params.userId,
        req.params.savingId
    ])
    console.log(result);
    res.sendStatus(204)
} catch (error) {
    console.log("Error: " + error);
    res.sendStatus(500);
}}

    


export const createSaving = async (req, res) => {
try {
    const connection = await connect();
    const result = connection.query('INSERT INTO savings (description, amount, entity, date, annualInterest, userId) VALUES (?,?,?,?,?,?)', [
        req.body.description,
        req.body.amount,
        req.body.entity,
        req.body.date,
        req.body.annualInterest,
        req.params.userId
    ])
    console.log(result);
    res.sendStatus(200)
} catch (error) {
    console.log("Error: " + error);
    res.sendStatus(500);
}}


export const deleteSaving = async (req, res) => {
try {
    const connection = await connect();
    const result = connection.query('DELETE FROM savings WHERE userId = ? AND id = ?', [
        req.params.userId,
        req.params.savingId
    ])
    console.log(result);
    res.sendStatus(204)
} catch (error) {
    console.log("Error: " + error);
    res.sendStatus(500);
}}

