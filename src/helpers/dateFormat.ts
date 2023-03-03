export const formatDate = (dateObj: Date): string => {
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();

  return `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;
};

export const formatTime = (dateObj: Date): string => {
  const hours = dateObj.getHours();
  const min = dateObj.getMinutes();
  const sec = dateObj.getSeconds();

  const time = `${hours < 10 ? '0' : ''}${hours}:${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0' : ''}${sec}`;

  return `${time}`;
};

export const formatDateTime = (dateTime: number): string => {
  const dateObj = new Date(dateTime);
  const date = formatDate(dateObj);
  const time = formatTime(dateObj);
  return `${date} ${time}`;
};
