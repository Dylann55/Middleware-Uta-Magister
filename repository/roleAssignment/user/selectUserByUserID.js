class SelectUserByUserID {
  async selectUserByUserID() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class SelectUserByUserID_SupaBase extends SelectUserByUserID {
  async selectUserByUserID(dataBase, userID) {
    const { data, error } = await dataBase.from('user')
      .select()
      .eq('userID', userID)
      .maybeSingle();
    if (error) { throw error; }
    return data;
  }
}

export { SelectUserByUserID_SupaBase as SelectUserByUserID };
