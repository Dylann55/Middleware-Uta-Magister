/* eslint-disable import/extensions */
import { SelectSpecializationHasAcademic } from '../../../../../repository/handleSpecialization/specializationEvaluationAcademics/selectSpecializationHasAcademic.js';

const listPreliminaryProjectEvaluation = async (req, res) => {
  const dataBase = req.dataBase;
  const { specializationHasSemesterID } = req.body;
  const selectSpecializationHasAcademicInstance = new SelectSpecializationHasAcademic();
  try {
    const data = await selectSpecializationHasAcademicInstance.selectSpecializationHasAcademic(dataBase, 'preliminaryProjectEvaluation', specializationHasSemesterID);
    res.status(200).json(data);
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default listPreliminaryProjectEvaluation;
