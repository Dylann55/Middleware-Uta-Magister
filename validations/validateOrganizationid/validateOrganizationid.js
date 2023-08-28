import { body, validationResult } from "express-validator";

const validateOrganizationid = [
    body('organizationID').isInt().withMessage('El organizationID no es válido'),
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

export default validateOrganizationid;