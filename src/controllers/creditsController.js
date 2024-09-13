import { connect } from "../database.js";


export const getCredits = async (req, res) => {
try {
        const connection = await connect();
        const [rows] = await connection.query('SELECT * FROM credits WHERE user_id = ?',[
            req.params.userId
        ]);
        console.log(rows[0]);
        res.send('credits')
    } catch (error) {
    console.log("error: ", error);
    res.sendStatus(500);
}}



export const getCredit = async (req, res) => {
try {
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM credits WHERE user_id = ? AND id = ?',[
        req.params.userId,
        req.params.id
    ]);
    console.log(rows);
    res.send('credit')
} catch (error) {
    console.log("Error: " + error);
    res.sendStatus(500);
}}  


export const updateCredit = async (req, res) => {
try {
    const connection = await connect();
    const result = await connection.query('UPDATE credits SET ? WHERE user_id = ? AND id = ?',[
        res.body,
        res.params.userId,
        req.params.id
    ]);
    console.log(result);
    res.send('update Credits ')
} catch (error) {
    console.log("Error: " + error);
    res.sendStatus(500);
}}


export const createCredit = async (req, res) => {
try {
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
} catch (error){
    console.log("error: ", error);
    res.sendStatus(500);
}}

    

export const deleteCredit = async (req, res) => {
try {
    const connection = await connect();
    const result = await connection.query('DELETE FROM credits WHERE user_id = ? AND id = ?')
    console.log(result);
    res.send('delete Credits ')
} catch (error){
    console.log("error: ", error);
    res.sendStatus(500);
}}

   