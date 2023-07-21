class AppError extends Error{
    constructor(msg, statusCode){
        super();
        this.message = msg;
        this.status = statusCode;
    }
}

module.exports = AppError;