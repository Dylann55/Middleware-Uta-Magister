class CreateUserAuth {
  async createUserAuth() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class CreateUserAuth_SupaBase extends CreateUserAuth {
  async createUserAuth(dataBase, email, redirectTo) {
    const { data: { user }, error } = await dataBase.auth.admin.inviteUserByEmail(email, { redirectTo });
    if (error) { throw error; }
    return user;
  }
}

export { CreateUserAuth_SupaBase as CreateUserAuth };
