import { body, validationResult } from "express-validator";

const validateSignup = [
    body('email').isEmail().withMessage('El correo electrónico no es válido'),
    body('name').isString().withMessage('El nombre no es un string'),
    body('name').exists().withMessage('El nombre no existe'),
    body('lastName').isString().withMessage('El apellido no es un string'),
    body('lastName').exists().withMessage('El apellido no existe'),
    body('password').isLength({min: 6}).withMessage('La contraseña debe tener al menos 6 caracteres'),
    (req, res, next) =>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }
        next();
    }
]

export default validateSignup;