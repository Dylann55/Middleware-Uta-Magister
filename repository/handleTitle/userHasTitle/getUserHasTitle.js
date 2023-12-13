class GetUserHasTitle {
  async getUserHasTitle() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class GetUserHasTitle_SupaBase extends GetUserHasTitle {
  async getUserHasTitle(dataBase, userHasTitleIDs) {
    const { data, error } = await dataBase.from('userHasTitle')
      .select()
      .in('userHasTitleID', userHasTitleIDs);
    if (error) { throw error; }
    return data;
  }
}

export { GetUserHasTitle_SupaBase as GetUserHasTitle };
