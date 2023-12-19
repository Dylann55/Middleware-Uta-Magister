class UpdateUserHasTitle {
  async updateUserHasTitle() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class UpdateUserHasTitle_SupaBase extends UpdateUserHasTitle {
  async updateUserHasTitle(dataBase, userHasTitleID, titleID, titleYear) {
    const { error } = await dataBase.from('userHasTitle')
      .update({
        titleID, titleYear,
      })
      .eq('userHasTitleID', userHasTitleID);
    if (error) { throw error; }
  }
}

export { UpdateUserHasTitle_SupaBase as UpdateUserHasTitle };
