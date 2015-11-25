baseResponse = function (data, errored, error) {
    var self = this;
    self.Data = data || {};
    self.Errored = errored || false;
    self.Error = error || "";
};

apiLogMessage = function (handler, message) {
    var self = this;
    self.Handler = handler || "NONE";
    self.Message = message || "UNKNOWN ERROR";
    self.LogTime = Date.now();
}

apiResponse = function (data) {
    return new baseResponse(data, false, null);
}

errorResponse = function (msg) {
    return new baseResponse(null, true, msg);
};

module.exports = {
    ApiLogMessage: apiLogMessage,
    ApiResponse: apiResponse,
    ErrorResponse: errorResponse
}