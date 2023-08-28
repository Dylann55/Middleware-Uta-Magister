import { body, validationResult } from "express-validator";

const validateMark = [
    body('mark').exists().withMessage('La mark no existe'),
    body('mark').isString().withMessage('La mark no es un string'),

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

export default validateMark;