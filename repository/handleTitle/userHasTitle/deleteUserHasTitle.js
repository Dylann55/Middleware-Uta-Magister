class DeleteUserHasTitle {
  async UserHasTitle() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class DeleteUserHasTitle_SupaBase extends DeleteUserHasTitle {
  async UserHasTitle(dataBase, userHasTitleIDs) {
    const { error } = await dataBase.from('userHasTitle')
      .delete()
      .in('userHasTitleID', userHasTitleIDs);
    if (error) {
      throw error;
    }
  }
}

export { DeleteUserHasTitle_SupaBase as DeleteUserHasTitle };
