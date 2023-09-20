class SelectEvaluationbyRoleHasUser {
  async selectEvaluationbyRoleHasUser() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class SelectEvaluationbyRoleHasUser_SupaBase extends SelectEvaluationbyRoleHasUser {
  async selectEvaluationbyRoleHasUser(dataBase, roleHasUserFirstID, roleHasUserSecondID) {
    const { data: dataFirst, error: errorFirst } = await dataBase.from('evaluation')
      .select()
      .eq('roleHasUserFirstID', roleHasUserFirstID);

    if (errorFirst || (dataFirst && dataFirst.length === 0)) {
      const { data: dataSecond, error: errorSecond } = await dataBase.from('evaluation')
        .select()
        .eq('roleHasUserSecondID', roleHasUserSecondID);

      if (errorSecond) {
        throw errorSecond;
      }

      return dataSecond;
    }

    return dataFirst;
  }
}

export { SelectEvaluationbyRoleHasUser_SupaBase as SelectEvaluationbyRoleHasUser };
