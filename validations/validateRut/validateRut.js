import { body, validationResult } from "express-validator";

const validateRut = [
    body('rut').isString().withMessage('El rut no es string').matches(/^(\d{1,2}\.)?\d{3}\.\d{3}[-][0-9kK]{1}$/).withMessage('Formato de rut inválido'),

    (req, res, next) =>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }
        next();
    }
]

export default validateRut;