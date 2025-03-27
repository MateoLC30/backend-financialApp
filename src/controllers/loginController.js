import { connect } from "../database.js"
import bcrypt from 'bcryptjs';
import  jwt  from "jsonwebtoken";


export const login = async (req, res) => {

    try {
        const { email, password } = req.body;
        
        console.log('Mail recibido: ', email);
        console.log('Password recibido: ', password);

        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }

        const connection = await connect().catch(err => {
            console.error('Error connecting to the database:', err);
            return res.status(500).json({ error: 'Database connection failed' });
        });
    const [result] = await connection.query('SELECT * FROM users WHERE email = ?', [email])

    if (result.length === 0) {
        return res.status(401).json({ error: 'Invalid email or password'});
    }

        const user = result[0];
        console.log('user: ', user);
        
        const match = await bcrypt.compare(password, user.password);
        console.log('Password match: ', match);
        
        if(!match){
            return res.status(401).json({ error: 'Invalid email or password'});
            } 
        
        const token = jwt.sign({userId: user.id},
            process.env.JWT_SECRET, {expiresIn: '1h'}); 

            res.json({ token, userId: user.id, name: user.name, email: user.email});  
            
} catch (error) {
    console.error('Eror during login', error);
    res.status(400).json({error: error.message})
}};

