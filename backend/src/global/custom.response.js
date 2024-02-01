const { HTTP_STATUS_CODE } = require("./constant")
const { errorInternalError } = require("./string")


module.exports.errorResponse=(message,statusCode)=>{
    return {
        message:message??errorInternalError,
        valid:false,
        statusCode:statusCode??HTTP_STATUS_CODE.internal
    }
}


module.exports.successResponse=(message,statusCode,data=null)=>{
    return {
        message:message,
        valid:true,
        statusCode:statusCode??HTTP_STATUS_CODE.success,
        data
    }
}