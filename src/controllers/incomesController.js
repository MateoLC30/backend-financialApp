import { connect } from "../database.js"

export const getIncomes = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM incomes WHERE user_id = ?', [
        req.params.user_id
    ])
    console.log(rows);
    res.send('incomes')
}

export const getIncome = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM incomes WHERE user_id = ? AND id = ?', [
        req.params.incomeId,
        req.params.id
    ])
    console.log(rows);
    res.json(rows[0])
}

export const updateIncome = async (req, res) => {
    const connection = await connect();
    const result = connection.query('UPDATE incomes SET ? WHERE user_id = ? AND id = ?', [
        req.params.userId,
        req,params.id
    ]);
    console.log(result);
    res.send('update Income')
}

export const createIncome = async(req, res) => {
    const connection = await connect();
    const result = connection.query('INSERT INTO incomes (date, description, amount, reason, user_id) VALUES (?,?,?,?,?)',[
        req.body.date,
        req.body.description,
        req.body.amount,
        req.body.reason,
        req.params.userId
    ])
    console.log(result);
    res.send('new Income')
}

export const deleteIncome = async (req, res) => {
    const connection = await connect();
    const result = connection.query('DELETE FROM incomes WHERE user_id = ? AND id = ?',[
        req.params.userId,
        req.params.id
    ])
    console.log(result);
    res.send('delete Income')
}
