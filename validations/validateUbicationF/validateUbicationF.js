import { body, validationResult } from "express-validator";

const validateUbicationF = [
    body('UbicationF').isString().withMessage('El UbicationF no es un string'),
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

export default validateUbicationF;