

const createErrorResObject = (data, message) => {
    return {
        status: false,
        statusCode: 400,
        message: message,
        data:data
    }
}

const createNotFoundResObject = (data, message) => {
    return {
        status: false,
        statusCode: 404,
        message: message,
        data:data
    }
}

module.exports.createSuccessResObject = (data, message) => {
    return {
        status: true,
        statusCode: 200,
        message: message,
        data:data
    }
}

module.exports.sendErrorRes = (res, message, code) => {
    res.status(code).send(createErrorResObject(null, message));
}

module.exports.createUnauthorizedResObject = () => {
    return {
        status: false,
        statusCode: 401,
        message: "Unauthorized access",
        data: {}
    }
}