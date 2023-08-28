import { body, validationResult } from "express-validator";

const validateTripName = [
    body('Name').isString().withMessage('El Name no es un string'),
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

export default validateTripName;