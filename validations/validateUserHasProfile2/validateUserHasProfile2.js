import { body, validationResult } from "express-validator";

const validateUserHasProfile2 = [
    body('userHasprofileID').isInt().withMessage('El userHasprofileID no es válido'),
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

export default validateUserHasProfile2;