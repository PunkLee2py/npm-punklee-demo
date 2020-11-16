function convertRGB(value) {
    let a = value;
    if (a.substr(0, 1) == "#") a = a.substring(1);
    let len = a.length;
    if (len != 6 && len != 3) return false;
    if (/[^0-9a-f]/i.test(a)) return false;
    a = a.toLowerCase();
    let b = new Array();
    for (let x = 0; x < 3; x++) {
        b[0] =
            len == 6
                ? a.substr(x * 2, 2)
                : a.substr(x * 1, 1) + a.substr(x * 1, 1);
        b[3] = "0123456789abcdef";
        b[1] = b[0].substr(0, 1);
        b[2] = b[0].substr(1, 1);
        b[20 + x] = b[3].indexOf(b[1]) * 16 + b[3].indexOf(b[2]);
    }
    return b[20] + "," + b[21] + "," + b[22];
}

module.exports = { convertRGB };
