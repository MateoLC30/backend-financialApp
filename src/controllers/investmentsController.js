import { connect } from "../database.js"


export const getInvestments = async (req, res) => {
try {
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM investments WHERE userId = ?', [
        req.params.userId
    ]);
    console.log(rows);
    res.json(rows)
} catch (error) {
    console.log("error: ", error);
    res.sendStatus(500);    
}}


export const getInvestment = async (req, res) => {
try {
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM investments WHERE userId = ? AND id = ?', [
        req.params.investmentId,
        req.params.id
    ])
    console.log(rows);
    res.json(rows[0])
} catch (error) {
    console.log("Error: " + error);
    res.sendStatus(500);   
}}



export const updateInvestment = async (req, res) => {
try {
    const connection = await connect();
    const result = await connection.query('UPDATE investments SET ? WHERE userId = ? AND id = ?', [
        req.body,
        req.params.userId,
        req.params.id
    ]);
    console.log(result);
    res.send('update saving')
} catch (error) {
    console.log("Error: " + error);
    res.sendStatus(500);
}}


export const createInvestment = async (req, res) => {
try {
    const connection = await connect();
    const result = await connection.query('INSERT INTO investments (date, description, entity, annual_interest, amount_invested, userId) VALUES (?,?,?,?,?,?)',[
        req.body.date,
        req.body.description,
        req.body.entity,
        req.body.annual_interest,
        req.boy.amount_invested,
        req.params.userId
    ])
    console.log(result);
    res.send('new saving')
} catch (error) {
    console.log("error: " + error);
    res.sendStatus(500)
}}


export const deleteInvestment = async (req, res) => {
try {
    const connection = await connect();
    const result = connection.query('DELETE FROM investments WHERE userId = ? AND id = ?'[
        req.params.userId,
        req.params.id
    ]);
    console.log(result);
    res.send('delete saving')
} catch (error) {
    console.log("Error: " + error);
    res.sendStatus(500);
}}

 
