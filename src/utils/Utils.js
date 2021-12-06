export const sliceIntoChunks = (arr, chunkSize) => {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        res.push(chunk);
    }
    return res;
}


export const convertLocalDate = (date) => {
    return (new Date(date)).toLocaleString('es-US');
}

export const stringUnacent = (data) => {
    let _query = data.toLowerCase();
    return _query.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}


export const getDateRange = (initialDate="", finalate = "") => {
    let datesRange = [];
    let _arrFecha="";
    let start = new Date(initialDate);
    let end = new Date(finalate);
    let loop = new Date(start);
    while (loop <= end) {
        let localDate = loop.toLocaleString('es-US');
        _arrFecha = localDate.split(" ");
        datesRange.push(_arrFecha[0]);
        let newDate = loop.setDate(loop.getDate() + 1);
        loop = new Date(newDate);
    }
    datesRange.shift();
    _arrFecha = finalate.split("-");
    datesRange.push(`${_arrFecha[2]}/${_arrFecha[1]}/${_arrFecha[0]}`);
    return datesRange;
}


export const imageToDataUrl = url => fetch(url)
  .then(response => response.blob())
  .then(blob => new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onloadend = () => resolve(reader.result)
    reader.onerror = reject
    reader.readAsDataURL(blob)
  }))