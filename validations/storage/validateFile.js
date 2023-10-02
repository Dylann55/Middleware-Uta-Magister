/* eslint-disable import/extensions */
import { GetFormat } from '../../repository/utils/getFormat.js';

const validateFile = async (req, res, next) => {
  // Verifica si se ha subido un archivo
  if (!req.file) {
    const error = new Error('No se ha subido ningún archivo');
    error.status = 400;
    return next(error);
  }
  const dataBase = req.dataBase;
  const fileName = req.file.originalname;
  const formatName = fileName.split('.').pop().toLowerCase();
  const getFormatInstance = new GetFormat();
  const data = await getFormatInstance.getFormat(dataBase, formatName);
  if (data) {
    req.data.formatID = data.formatID;
    next();
  } else {
    const findError = new Error('No se creo el usuario autenticado');
    findError.status = 409;
    throw findError;
  }
};

export default validateFile;
