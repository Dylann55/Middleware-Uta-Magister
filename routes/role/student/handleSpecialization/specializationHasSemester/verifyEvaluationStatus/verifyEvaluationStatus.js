/* eslint-disable eqeqeq */
const verifyEvaluationStatus = async (req, res, next) => {
  const { evaluationStatusID, stageID } = req.body;
  try {
    if (
      (evaluationStatusID !== 2 && evaluationStatusID !== 9 && evaluationStatusID !== 16)
      && ((stageID === 1 && evaluationStatusID >= 1 && evaluationStatusID <= 9)
        || (stageID === 2 && evaluationStatusID >= 10 && evaluationStatusID <= 16))
    ) {
      next();
    } else {
      return res.status(400).json({ error: 'No puedes Subir o Actualizar Anteproyectos durante esta Etapa o Estado de Evaluación' });
    }
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default verifyEvaluationStatus;
