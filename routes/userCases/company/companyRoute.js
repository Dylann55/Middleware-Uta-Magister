import { express, listMyCompanies, createCompany, aCompany, validateName} from './companyModules.js';
const companyRoute = express.Router();

companyRoute.route('/')
.get(listMyCompanies)
.post(validateName, createCompany)

companyRoute.get('/:organizationID', aCompany);

export default companyRoute;

