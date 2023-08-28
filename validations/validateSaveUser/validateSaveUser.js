import { body, validationResult } from "express-validator";

const validateSaveUser = [
    body('id').isUUID().withMessage('El id no es valido'),
    body('email').isEmail().withMessage('El correo electrónico no es válido'),
    body('name').isString().withMessage('El nombre no es un string'),
    body('name').exists().withMessage('El nombre no existe'),
    body('lastName').isString().withMessage('El apellido no es un string'),
    body('lastName').exists().withMessage('El apellido no existe'),
    body('rut').exists().withMessage('El rut no existe'),

    (req, res, next) =>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }
        next();
    }
]

export default validateSaveUser;