export class ValidationError extends Error {
    constructor(message, field) {
    super(message);
    this.name = 'MyValidationError';
    this.field = field;
    this.statusCode = 400;
  }
}


