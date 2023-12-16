class GetSpecializationHasUser {
  async getSpecializationHasUser() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class GetSpecializationHasUser_SupaBase extends GetSpecializationHasUser {
  async getSpecializationHasUser(dataBase, userID) {
    const { data, error } = await dataBase.from('specializationHasUser')
      .select(`
        specializationHasUserID,
        specializationID,
        userID,
        statusID,
        status(name),
        specialization (name),
        entrySemester (*),
        completionSemester (*)
      `)
      .eq('userID', userID);
    if (error) { throw error; }
    return data;
  }
}

export { GetSpecializationHasUser_SupaBase as GetSpecializationHasUser };
