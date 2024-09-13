import { connect } from "../database.js"

export const login = async (req, res) => {
    try { 
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM users WHERE email = ?', [
        req.body.user.email
    ]);

    if (rows > 0) {
        const user = rows[0];
        const match = await bcrypt.compare(req.body.password, user.password);

        if(match){
            return res.status(200).json({ message: 'hello', user});
            ;
        } else {
            return res.status(401).json({ message: 'faul'});
        }
    } else {
        return res.status(404).json({ message: "user not found"});
    }
    
} catch (error) {
    return res.status(500).json({ message: "Server error", error})
}};

