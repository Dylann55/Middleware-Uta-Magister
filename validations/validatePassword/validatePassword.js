import { body, validationResult } from "express-validator";

const validatePassword = [
    body('password').isString().withMessage('El password no es string'),
    (req, res, next) =>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array(),
            });
        }
        next();
    }
]

export default validatePassword;