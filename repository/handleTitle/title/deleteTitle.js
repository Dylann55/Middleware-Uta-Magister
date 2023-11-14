class DeleteTitle {
  async deleteTitle() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class DeleteTitle_SupaBase extends DeleteTitle {
  async deleteTitle(dataBase, titleIDs) {
    const { error } = await dataBase.from('title')
      .delete()
      .in('titleID', titleIDs);
    if (error) {
      throw error;
    }
  }
}

export { DeleteTitle_SupaBase as DeleteTitle };
