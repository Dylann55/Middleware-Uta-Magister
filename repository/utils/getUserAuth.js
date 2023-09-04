class GetUserAuth {
  async getUserAuth() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class GetUserAuth_SupaBase extends GetUserAuth {
  async getUserAuth(dataBase, access_token) {
    const { data: { user } } = await dataBase.auth.getUser(access_token);
    return user;
  }
}

export { GetUserAuth_SupaBase as GetUserAuth };
