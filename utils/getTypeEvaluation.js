function getTypeEvaluation(typeEvaluateID) {
  switch (typeEvaluateID) {
    case 1:
      return 'preliminaryProjectEvaluation';
    case 2:
      return 'thesisEvaluation';
    default:
      return null;
  }
}

export default getTypeEvaluation;
