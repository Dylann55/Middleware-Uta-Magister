import { body, validationResult } from "express-validator";

const validateTransport = [
    body('access_token').exists().withMessage('El access_token no existe'),
    body('organizationID').isInt().withMessage('El organizationID no es válido'),
    body('patent').exists().withMessage('La patent no existe'),
    body('patent').isString().withMessage('La patent no es un string'),
    body('mark').exists().withMessage('La mark no existe'),
    body('mark').isString().withMessage('La mark no es un string'),
    body('model').exists().withMessage('El model no existe'),
    body('model').isString().withMessage('El model no es un string'),
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

export default validateTransport;