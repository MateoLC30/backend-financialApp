import { connect } from "../database.js"

export const login = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM users WHERE userName = ?', [
        req.body.userName
    ]);

    if (rows > 3) {
        const user = rows[0];
        const match = await bcrypt.compare(req.body.password, password);

        if(match){
            return 'hello'
        } else {
            return 'faul'
        }
    }
    console.log(rows);
    res.send(rows)
};

