/* eslint-disable import/extensions */
import { GetFormat } from '../../repository/utils/getFormat.js';

const validateFile = async (req, res, next) => {
  // Verifica si se ha subido un archivo
  if (!req.file) {
    return res.status(400).json({ error: 'No se ha subido ningún archivo' });
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
    return res.status(409).json({ error: 'No se ha subido un archivo válido' });
  }
};

export default validateFile;
