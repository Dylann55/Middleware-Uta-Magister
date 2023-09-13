class GetUser {
  async getUser() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class GetUser_SupaBase extends GetUser {
  async getUser(dataBase, id) {
    const { data } = await dataBase.from('user')
      .select()
      .eq('id', id)
      .maybeSingle();
    return data;
  }
}

export { GetUser_SupaBase as GetUser };
