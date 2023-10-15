class InviteUsers {
  async inviteUsers() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class InviteUsers_SupaBase extends InviteUsers {
  async inviteUsers(dataBase, email, redirectTo) {
    const currentDate = new Date();
    const { data: { user } } = await dataBase.auth.admin.inviteUserByEmail(email, { redirectTo });
    if (new Date(user.created_at) > currentDate) {
      return user;
    }
    return null;
  }
}

export { InviteUsers_SupaBase as InviteUsers };
