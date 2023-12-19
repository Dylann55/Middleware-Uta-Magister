class CreateUserHasTitle {
  async createUserHasTitle() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class CreateUserHasTitle_SupaBase extends CreateUserHasTitle {
  async createUserHasTitle(dataBase, userID, formatID, titleID, documentTitle, yearTitle) {
    const { data, error } = await dataBase.from('userHasTitle').insert({
      userID, formatID, titleID, documentTitle, yearTitle,
    }).select()
      .maybeSingle();
    if (error) { throw error; }
    return data;
  }
}

export { CreateUserHasTitle_SupaBase as CreateUserHasTitle };
