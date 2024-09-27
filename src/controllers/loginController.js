import { connect } from "../database.js"
import bcrypt from 'bcryptjs';
import  jwt  from "jsonwebtoken";


export const login = async (req, res) => {
    try { 
    const connection = await connect();
    const { email, password } = req.body;
    const [result] = await connection.query('SELECT * FROM users WHERE email = ?', [
        email
    ]);

    if (result.length === 0) {
        return res.status(401).json({ error: 'Invalid Credentials 1' });
    };

        const user = result[0];
        console.log('user: ', user,  'input: ',password, 'saved: ', user.password);
        
        const match = await bcrypt.compare(password, user.password);
        console.log('match: ',match);
        
        
        if(!match){
            return res.status(401).json({ error: 'Invalid Credentials Password'});
            } 
        
        const token = jwt.sign({userId: user.id},
            process.env.JWT_SECRET, {expiresIn: '1h'});
            res.json({ token });

        app.get('/protected', (req, res) => {
            const token = req.headers.authorization?.split('')[1];

            if(!token) 
                return res.status(401).json({error: 'Access denied'});
            
            try {
                const verified = jwt.verify(token, process.env.JWT_SECRET);
                res.json({message: 'Access to protected route', user: verified});
            } catch (error) {
                res.status(401).json({error: 'Invalid Token'})
            }
        }) 
    
} catch (error) {
    res.status(400).json({error: error.message})
}};

