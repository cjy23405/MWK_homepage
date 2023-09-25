import { importDefaultScript } from 'utils/core';

const datasObject = importDefaultScript(require.context('./', false, /[A-Z].+\.js$/));
const datasObjectKeys = Object.keys(datasObject);
const datas = datasObjectKeys.map((item) => {
  datasObject[item].id = item;
  return datasObject[item];
});

// end 날짜 기준 소팅
datas.sort((a, b) => {
  const endDateA = (() => {
    let date = a.overview.date.end;

    if (Array.isArray(date)) {
      date = date[date.length - 1];
    }

    return date.toUpperCase();
  })();
  const endDateB = (() => {
    let date = b.overview.date.end;

    if (Array.isArray(date)) {
      date = date[date.length - 1];
    }

    return date.toUpperCase();
  })();

  if (endDateA < endDateB) {
    return 1;
  }

  if (endDateA > endDateB) {
    return -1;
  }

  return 0;
});

export { datasObject };
export default datas;
