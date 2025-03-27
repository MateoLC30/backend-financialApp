import { connect } from "../database.js";
import bcrypt from 'bcryptjs';

export const getUsers = async (req, res) => {
try {
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM users');
    res.json(rows);
} catch (error) {
    console.log("Error: ", error);   
    res.sendStatus(500);
}}


export const getUser = async (req, res) => {
try {
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM users WHERE id = ?', [ 
        req.params.userId,
    ]);
    res.json(rows[0])
    console.log(rows);
} catch (error) {
    console.log("Error: ", error);
    res.sendStatus(500);
}}

export const updateUser = async (req, res) => {
try {
    const connection = await connect();
    const result = await connection.query('UPDATE users SET ? WHERE id = ?', [
        req.body,
        req.params.userId,
    ]);
    console.log(result);
    res.sendStatus(204)
} catch (error) {
    console.log("Error: ", error); 
    res.sendStatus(500);
}}



export const resetUserPassword = async (req, res) => {
    try {
        const { password } = req.body;
        const { uuid } = req.params;
        const connection = await connect();

        console.log('uuid: ' + uuid);
    
        const [rows] = await connection.query('SELECT email FROM resets_password WHERE token = ?', [uuid]);


        if (rows.length === 0) {
             res.status(400).json({ error: "Token inválido o expirado" });
        }

        const email = rows[0].email;

        if (!email) {
            res.status(404).json({ error: "Token Invalido" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const [result] = await connection.query('UPDATE users SET password = ? WHERE email = ?', [
            hashedPassword, 
            email
        ]);

        await connection.query('DELETE FROM resets_password WHERE token = ?', [uuid]);

        connection.end();

        console.log('result: ' + result);
        console.log('password: ' + hashedPassword);
        console.log('emailBack: ' + email);

        res.status(200).json({ message: "Contraseña actualizada correctamente" });

    } catch (error) {
        console.log("Error: " + error);
        res.sendStatus(500);
    }}


export const createUser = async (req, res) => {
try {
    const connection = await connect();
    const { name, password, email } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await connection.query('INSERT INTO users (name, password, email) VALUES (?,?,?)', [
        name,
        hashedPassword,
        email
    ]);
    console.log("Usuario creado correctamente", result);
    res.status(201).json({ message: 'Usuario creado correctamente' });
} catch (error) {
    console.log("Error: " + error);
    res.status(500).json({ error: 'Error al crear el usuario' });
}}

   

export const deleteUser = async (req, res) => {
try {
        const connection = await connect();
        const result = await connection.query('DELETE FROM users WHERE id = ?', [
            req.params.userId
        ])
        res.sendStatus(200)
} catch (error) {
    console.log("Error: " + error); 
    res.sendStatus(500); 
}}

