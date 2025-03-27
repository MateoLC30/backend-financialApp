import  jwt  from "jsonwebtoken";


export const verifyToken = (req, res, next) => {
    const header = req.header("Authorization");

    console.log('Authorization header:', header);
    
    if (!header || !header.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Error en la validacion del token" });
    }

    const token = header.split(" ")[1];

    console.log('Extracted token:', token);

    if (!token) {
        return res.status(401).json({ message: "Token not provided" });
    }

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = payload.userId;
        console.log("payload-UserId: " + payload.userId);
        
        next();
    } catch (e) {
        console.error('Token verification error:', e);
        return res.status(403).json({ message: "Token not valid: ${e.message"});
    }
};