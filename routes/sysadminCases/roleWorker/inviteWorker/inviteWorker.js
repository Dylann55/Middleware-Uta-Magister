/* eslint-disable import/extensions */
import { GetRole } from '../../../../repository/utils/getRole.js';
import { SelectWorkerByEmail } from '../../../../repository/sysadminCases/rolesWorker/selectWorkerByEmail.js';
import { SignInWithOtp } from '../../../../repository/authCases/signInWithOtp.js';
import { SearchRole } from '../../../../repository/utils/searchRole.js';
import { CreateRoleWorker } from '../../../../repository/sysadminCases/rolesWorker/createRoleWorker.js';
import { AdminInviteWorker } from '../../../../repository/authCases/adminInviteWorker.js';
import { CreateWorker } from '../../../../repository/sysadminCases/rolesWorker/createWorker.js';

const inviteWorker = async (req, res) => {
  const dataBase = req.dataBase;
  const { email } = req.body;
  const getRoleInstance = new GetRole();
  const selectWorkerByEmailInstance = new SelectWorkerByEmail();
  const signInWithOtpInstance = new SignInWithOtp();
  const searchRoleInstance = new SearchRole();
  const createRoleWorkerInstance = new CreateRoleWorker();
  const adminInviteWorkerInstance = new AdminInviteWorker();
  const createWorkerInstance = new CreateWorker();
  try {
    const roles = await getRoleInstance.getRole(dataBase);
    const worker = await selectWorkerByEmailInstance.selectWorkerByEmail(dataBase, email);
    if (worker) {
      await signInWithOtpInstance.signInWithOtp(dataBase, email, process.env.URL_INVITE);
      const data = await searchRoleInstance.searchRole(dataBase, roles.Encargado, worker.workerID);
      if (data) {
        res.status(409).json({ message: 'El Trabajador ya tiene ese rol' });
      } else {
        // eslint-disable-next-line no-unused-vars
        const createdWorker = createRoleWorkerInstance.createRoleWorker(dataBase, worker.workerID, roles.Encargado);
        res.json({ verificationMessage: 'El Trabajor ha sido invitado' });
      }
    } else {
      const user = await adminInviteWorkerInstance.adminInviteWorker(dataBase, email, process.env.URL_RESET_PASSWORD);
      if (user) {
        const createdWorker = await createWorkerInstance.createWorker(dataBase, user.id, user.email);
        await createRoleWorkerInstance.createRoleWorker(dataBase, createdWorker.workerID, roles.Encargado);
        res.json({ verificationMessage: 'El Trabajor nuevo ha sido invitado' });
      } else {
        res.status(500).json({ error: 'Error al enviar invitación' });
      }
    }
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default inviteWorker;
