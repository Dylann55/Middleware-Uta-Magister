import { body, validationResult } from "express-validator";

const validateUserHasProfile = [
    body('userHasProfile').isInt().withMessage('El userHasProfile no es válido'),
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

export default validateUserHasProfile;