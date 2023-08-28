import { body, validationResult } from "express-validator";

const validateVehicleHasTripID = [
    body('vehicleHasTripID').isInt().withMessage('El vehicleHasTripID no es válido'),
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

export default validateVehicleHasTripID;