import { body, validationResult } from "express-validator";

const validateModel = [
    body('model').exists().withMessage('El model no existe'),
    body('model').isString().withMessage('El model no es un string'),

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

export default validateModel;