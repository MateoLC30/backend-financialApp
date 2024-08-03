import { connect } from "../database.js";

export const getExpenses = async (req, res) => {
    const connection = await connect();
    const [rows] = connection.query('SELECT * FROM expenses WHERE id = ?',[
        req.params.id
    ])
    console.log(rows);
    res.send(rows[0]);
}

export const getExpense = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM expenses WHERE user_id = ? AND id = ?',[
        req.params.userId,
        req.params.id
    ]);
    console.log(rows);
    res.send('expenses')
}

export const updateExpense = async (req, res) => {
    const connection = await connect();
    const result = await connection.query('UPDATE expenses SET ? WHERE user_id AND id = ?',[
        req.body,
        req.params.userId,
        req.params.id
    ]);
    console.log(result);
    res.send('update Expense')
}

export const createExpense = async (req, res) => {
    const connection = await connect();
    const result = await connection.query('INSERT INTO expenses (date, description, entity, amount, user_id) VALUES (?,?,?,?,?)',[
        req.body.date,
        req.body.description,
        req.body.entity,
        req.bosy.amount,
        req.params.userId
    ]);
    console.log(result);
    res.send('new Expense')
}

export const deleteExpense = async (req, res) => {
    const connection = await connect();
    const result = await connection.query('DELETE FROM expenses WHERE user_id = ? AND id = ?',[
        req.params.userId,
        req.params.id
    ]);
    console.log(result);
    res.send('delete Expense')
}