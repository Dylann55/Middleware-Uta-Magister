const verifySecondEvaluationStatus = async (req, res, next) => {
  const { evaluationStatusID } = req.body;
  try {
    if (evaluationStatusID === 4 || evaluationStatusID === 9 || evaluationStatusID === 10) {
      req.body.stage = 'SecondStage';
      req.body.stageID = 2;
      next();
    } else {
      return res.status(409).json({ error: 'No puedes Subir o Actualizar Anteproyectos durante este Estado de Evaluacion' });
    }
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default verifySecondEvaluationStatus;
