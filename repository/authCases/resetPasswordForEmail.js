class ResetPasswordForEmail {
  async resetPasswordForEmail() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class ResetPasswordForEmail_SupaBase extends ResetPasswordForEmail {
  async resetPasswordForEmail(dataBase, email, redirectTo) {
    const { error } = await dataBase.auth.resetPasswordForEmail(email, { redirectTo });
    if (error) { throw error; }
  }
}

export { ResetPasswordForEmail_SupaBase as ResetPasswordForEmail };
