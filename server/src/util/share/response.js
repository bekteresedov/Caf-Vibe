class ApiResponse {
  constructor(content, message) {
    this.content = content;
    this.message = message;
  }

  success(response) {
    return response.status(200).json({
      success: true,
      content: this.content,
      message: this.message || "The operation was completed successfully",
    });
  }

  created(response) {
    return response.status(201).json({
      success: true,
      content: this.content,
      message: this.message || "The operation was completed successfully",
    });
  }

  error500(response) {
    return response.status(500).json({
      success: false,
      content: this.content,
      message: this.message || "Operation failed!",
    });
  }

  error400(response) {
    return response.status(400).json({
      success: false,
      content: this.content,
      message: this.message || "Operation failed!",
    });
  }

  error401(response) {
    return response.status(401).json({
      success: false,
      content: this.content,
      message: this.message || "Lütfen Oturum Açın!",
    });
  }

  error404(response) {
    return response.status(404).json({
      success: false,
      content: this.content,
      message: this.message || "Operation failed!",
    });
  }

  error429(response) {
    return response.status(429).json({
      success: false,
      content: this.content,
      message: this.message || "Çok Fazla İstek Atıldı!",
    });
  }
}

module.exports = ApiResponse;
