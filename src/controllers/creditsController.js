import { connect } from "../database.js";

export const getCredits = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM credits WHERE user_id = ?',[
        req.params.userId
    ]);
    console.log(rows[0]);
    res.send('credits')
}

export const getCredit = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM credits WHERE user_id = ? AND id = ?',[
        req.params.userId,
        req.params.id
    ]);
    console.log(rows);
    res.send('credit')
}

export const updateCredit = async (req, res) => {
    const connection = await connect();
    const result = await connection.query('UPDATE credits SET ? WHERE user_id = ? AND id = ?',[
        res.body,
        res.params.userId,
        req.params.id
    ]);
    console.log(result);
    res.send('update Credits ')
}

export const createCredit = async (req, res) => {
    const connection = await connect();
    const result = await connection.query('INSERT INTO credits (description, payment_date, fee, term, entity, user_id) VALUES (?,?,?,?,?,?)',[
        req.body.description,
        req.body.payment_date,
        req.body.fee,
        req.body.term,
        req.body.entity,
        req.params.userId
    ]);
    console.log(result);
    res.send('new Credit')
}

export const deleteCredit = async (req, res) => {
    const connection = await connect();
    const result = await connection.query('DELETE FROM credits WHERE user_id = ? AND id = ?')
    console.log(result);
    res.send('delete Credits ')
}