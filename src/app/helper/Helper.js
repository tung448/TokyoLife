
class Helper{
    extracNumber(str){
        const match = str.match(/\d+/);
        return parseInt(match[0], 10);
    };
}

module.exports = new Helper();