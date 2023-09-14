class SelectUserByEmail {
  async selectUserByEmail() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class SelectUserByEmail_SupaBase extends SelectUserByEmail {
  async selectUserByEmail(dataBase, email) {
    const { data, error } = await dataBase.from('user')
      .select()
      .eq('email', email)
      .maybeSingle();
    if (error) { throw error; }
    return data;
  }
}

export { SelectUserByEmail_SupaBase as SelectUserByEmail };
