class SelectBodyAcademic {
  async selectUser() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class SelectBodyAcademic_SupaBase extends SelectBodyAcademic {
  async selectBodyAcademic(dataBase, userID) {
    const { data, error } = await dataBase.from('academicHasTitle')
      .select(`
      *,
      title (*),
      format (*)
      `)
      .eq('userID', userID);
    if (error) { throw error; }
    return data;
  }
}

export { SelectBodyAcademic_SupaBase as SelectBodyAcademic };
