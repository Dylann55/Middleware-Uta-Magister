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
    return data.session;
  }
}

export { AuthUser_SupaBase as AuthUser };

