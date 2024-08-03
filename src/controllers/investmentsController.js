import { connect } from "../database.js"

export const getInvestments = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM investments WHERE user_id = ?', [
        req.params.userId
    ]);
    console.log(rows);
    res.send('investments')
}

export const getInvestment = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM investments WHERE user_id = ? AND id = ?', [
        req.params.investmentId,
        req.params.id
    ])
    console.log(rows);
    res.json(rows[0])
}

export const updateInvestment = async (req, res) => {
    const connection = await connect();
    const result = await connection.query('UPDATE investments SET ? WHERE user_id = ? AND id = ?', [
        req.body,
        req.params.userId,
        req.params.id
    ]);
    console.log(result);
    res.send('update saving')
}

export const createInvestment = async (req, res) => {
    const connection = await connect();
    const result = await connection.query('INSERT INTO investments (date, description, entity, annual_interest, amount_invested, user_id) VALUES (?,?,?,?,?,?)',[
        req.body.date,
        req.body.description,
        req.body.entity,
        req.body.annual_interest,
        req.boy.amount_invested,
        req.params.userId
    ])
    console.log(result);
    res.send('new saving')
}

export const deleteInvestment = async (req, res) => {
    const connection = await connect();
    const result = connection.query('DELETE FROM investments WHERE user_id = ? AND id = ?'[
        req.params.userId,
        req.params.id
    ]);
    console.log(result);
    res.send('delete saving')
}
