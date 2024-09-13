import { connect } from "../database.js";


export const getBills = async (req, res) => {
try { 
        const connection = await connect();
        const [rows] = await connection.query('SELECT * FROM bills WHERE user_id = ?',[
            req.params.userId
        ]);
        console.log(rows);
        res.send(rows[0])
    } catch (error) {
    console.log("Error: ", error);
    res.sendStatus(500);
}}


try {
    
} catch (error) {
    console.log("Error: ", error);
    res.senStatus(500)    
}
export const getBill = async (req, res) => {
    const connection = await connect();
    const [rows] = connection.query('SELECT * FROM bills WHERE user_id = ? AND id = ?',[
        req.params.userId,
        req.params.id
    ]);
    console.log(rows);
    res.send(rows[0])
}


export const updateBill  = async (req, res) => {
try {
    const connection = await connect();
    const result = await connection.query('UPDATE bills SET ? WHERE user_id = ? AND id = ?',[
        req.body,
        req.params.userId,
        req.params.id
    ])
    console.log(result);
    res.send('update Bill ')
} catch (error) {
    console.log("error: " + error);
    res.sendStatus(500)
}}



export const createBill = async (req, res) => {
try {
    const connection = await connect();
    const result = connection.query('INSERT INTO bills (payment_date, description, entity, amount, user_id) VALUES (?,?,?,?,?)',[
        req.body.payment_date,
        req.body.description,
        req.body.entity,
        req.bosy.amount,
        req.params.id
    ])
    console.log(result);
    res.send('new Bill ')
} catch (error) {
    console.log("error: " + error);
    res.sendStatus(500)
}}

    
export const deleteBill  = async (req, res) => {
try {
    
    const connection = await connect();
    const result = connection.query('DELETE FROM bills WHERE user_id = ? AND id = ?',[
        req.params.userId,
        req.params.id
    ])
    console.log(result);
    res.send('delete Bill ')
} catch (error) {
    console.log("error: " + error);
    res.sendStatus(500)
}}
