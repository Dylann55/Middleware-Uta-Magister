import { body, validationResult } from "express-validator";

const validateLastname = [
    body('lastName').exists().withMessage('El lastName no existe'),
    body('lastName').isString().withMessage('El lastName no es string'),
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

export default validateLastname;