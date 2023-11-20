import format from 'date-fns-tz/format';
import { utcToZonedTime } from 'date-fns-tz';

function getTimestamp() {
  const now = new Date();
  const timeZone = 'America/Santiago';
  const chileTime = utcToZonedTime(now, timeZone);
  const formattedDate = format(chileTime, "yyyy-MM-dd'T'HH:mm:ssXXX", { timeZone });

  return formattedDate;
}

export default getTimestamp;
