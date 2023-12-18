/* eslint-disable no-restricted-syntax */
function mergeData(data1, data2) {
  const mergedData = [];

  // Crear un conjunto de todas las claves presentes en ambas listas
  const allKeys = new Set([...Object.keys(data1[0]), ...Object.keys(data2[0])]);

  // Iterar sobre cada objeto en ambas listas
  for (const key of allKeys) {
    const mergedObject = {};

    // Buscar el objeto correspondiente en data1 y data2
    const obj1 = data1.find((obj) => obj[key] !== undefined);
    const obj2 = data2.find((obj) => obj[key] !== undefined);

    // Combinar los valores según la clave
    mergedObject[key] = obj1 ? obj1[key] : null;
    mergedObject[key] += obj2 ? obj2[key] : null;

    // Agregar el objeto combinado a la lista final
    mergedData.push(mergedObject);
  }

  return mergedData;
}

export default mergeData;
