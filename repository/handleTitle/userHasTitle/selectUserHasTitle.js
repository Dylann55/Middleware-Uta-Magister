class SelectUserHasTitle {
  async selectUser() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class SelectUserHasTitle_SupaBase extends SelectUserHasTitle {
  async selectUserHasTitle(dataBase, userID) {
    const { data, error } = await dataBase.from('userHasTitle')
      .select(`
      userHasTitleID,
      documentTitle,
      formatID,
      titleID,
      title (*),
      format (*)
      `)
      .eq('userID', userID);
    if (error) { throw error; }
    return data;
  }
}

export { SelectUserHasTitle_SupaBase as SelectUserHasTitle };
