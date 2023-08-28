import { body, validationResult } from "express-validator";

const validateMaxWeight = [
    body('maxWeight').isInt().withMessage('El maxWeight no es un entero'),

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

export default validateMaxWeight;