import { body, validationResult } from "express-validator";

const validateWeight = [
    body('weight').isInt().withMessage('El weight no es un entero'),

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

export default validateWeight;