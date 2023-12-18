class CreateTitle {
  async createTitle() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class CreateTitle_SupaBase extends CreateTitle {
  async createTitle(dataBase, name, typeID, universityID, departamentTitle) {
    const { error } = await dataBase.from('title').insert({
      name, typeID, universityID, departamentTitle,
    });
    if (error) { throw error; }
  }
}

export { CreateTitle_SupaBase as CreateTitle };
