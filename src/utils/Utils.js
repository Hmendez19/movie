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

export const stringUnacent=(data)=>{
    let _query = data.toLowerCase();
    return _query.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}