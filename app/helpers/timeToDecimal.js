const timeToDecimal = (time) => {
    var arr = time.split(':');
    var dec = parseInt((arr[1]/6)*10, 10);
    return(parseFloat(parseInt(arr[0], 10) + '.' + (dec<10?'0':'') + dec))
}

export default timeToDecimal