function mergeData(data1, data2) {
  const propertiesToAdd = {
    director_userID: null,
    director_evaluateHasUserID: null,
    director_fullName: null,
    director_rut: null,
    director_email: null,
    codirector_userID: null,
    codirector_evaluateHasUserID: null,
    codirector_fullName: null,
    codirector_rut: null,
    codirector_email: null,
  };

  // Agregar las propiedades a cada objeto en data1
  const updatedData1 = data1.map((item) => ({ ...item, ...propertiesToAdd }));

  const propertiesToAdd2 = {
    guideAcademic_userID: null,
    guideAcademic_evaluateHasUserID: null,
    guideAcademic_fullName: null,
    guideAcademic_rut: null,
    guideAcademic_email: null,
    academicA_userID: null,
    academicA_evaluateHasUserID: null,
    academicA_fullName: null,
    academicA_rut: null,
    academicA_email: null,
    academicB_userID: null,
    academicB_evaluateHasUserID: null,
    academicB_fullName: null,
    academicB_rut: null,
    academicB_email: null,
  };

  const updatedData2 = data2.map((item) => ({ ...item, ...propertiesToAdd2 }));

  const mergedData = [...updatedData1, ...updatedData2];
  return mergedData;
}

export default mergeData;
