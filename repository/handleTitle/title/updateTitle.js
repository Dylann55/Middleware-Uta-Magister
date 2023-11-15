class UpdateTitle {
  async updateTitle() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class UpdateTitle_SupaBase extends UpdateTitle {
  async updateTitle(dataBase, titleID, name, typeID, universityID) {
    const { error } = await dataBase.from('title')
      .update({
        name, typeID, universityID,
      })
      .eq('titleID', titleID);
    if (error) { throw error; }
  }
}

export { UpdateTitle_SupaBase as UpdateTitle };
