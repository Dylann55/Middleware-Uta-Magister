import { express, checkAdmin, myDriverProfiles, listMyParticipation, listMyParticipationCompany, updateMyUser, MyUserData, validateName, validateLastname, listCurrency, validateRut } from './dataModules.js';

const dataRoute = express.Router();

dataRoute.route('/')
.get(MyUserData)
.put(validateName, validateLastname, validateRut, updateMyUser)

dataRoute.get('/driverProfiles', myDriverProfiles);
dataRoute.get('/checkadmin', checkAdmin);
dataRoute.get('/participations', listMyParticipation);
dataRoute.get('/participations/:organizationID', listMyParticipationCompany);
dataRoute.get('/currency', listCurrency);


export default dataRoute;