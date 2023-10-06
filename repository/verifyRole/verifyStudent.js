class SearchRole {
  async verifyStudent() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class VerifyStudent_SupaBase extends SearchRole {
  async verifyStudent(dataBase, id) {
    const { data } = await dataBase.from('student')
      .select()
      .eq('id', id)
      .maybeSingle();
    return data;
  }
}

export { VerifyStudent_SupaBase as VerifyStudent };
