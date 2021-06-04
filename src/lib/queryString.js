module.exports.queryString = (obj) => {

    const arrTotal = Object.entries(obj)
    const arrMap = arrTotal.map(item => {
        return `${item[0]}=${item[1]}`
    })
    const arrJoin = arrMap.join('&')

    return arrJoin
}

