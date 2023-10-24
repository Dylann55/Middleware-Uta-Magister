class InviteUsers {
  async inviteUsers() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class InviteUsers_SupaBase extends InviteUsers {
  async inviteUsers(dataBase, email, redirectTo) {
    const { data: { user }, error } = await dataBase.auth.admin.inviteUserByEmail(email, { redirectTo });
    if (!error) {
      return user;
    }
    return null;
  }
}

export { InviteUsers_SupaBase as InviteUsers };
