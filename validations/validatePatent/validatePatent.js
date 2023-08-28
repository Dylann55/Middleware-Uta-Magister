import { body, validationResult } from "express-validator";

const validatePatent = [
    body('patent').exists().withMessage('La patent no existe'),
    body('patent').isString().withMessage('La patent no es un string'),

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

export default validatePatent;