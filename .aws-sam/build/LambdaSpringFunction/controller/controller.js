var service = require(process.cwd() + '/service/service.js');
 
exports.controller = async function(colors) {
    return  await service.service();
}