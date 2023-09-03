class AuthUser {
  constructor() {
    // Implementación predeterminada
  }

  async authUser() {
    throw new Error("Sobreescribir para obtener la instancia de la Base de datos");
  }
}

class AuthUser_SupaBase extends AuthUser {
  constructor() {
    super();
  }

  async authUser(dataBase, email, password) {
    const { data, error } = await dataBase.auth.signInWithPassword({ email, password });
    if (error) { throw error; }
    const { access_token, refresh_token } = data.session;
    const session = { access_token, refresh_token };
    return session;
  }
}

export { AuthUser_SupaBase as AuthUser };

