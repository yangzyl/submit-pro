import Error from './error'

class RequestError extends Error {
  constructor(error) {
    super({ error, name: 'RequestError' })
  }
}

class ValidationError extends Error {
  constructor(error) {
    super({ error, name: 'ValidationError' })
  }
}

class NotFoundError extends Error {
  constructor(error) {
    super({ error, name: 'NotFoundError' })
  }
}

class InvalidOperationError extends Error {
  constructor(error) {
    super({ error, name: 'InvalidOperationError' })
  }
}

class ForbiddenError extends Error {
  constructor(error) {
    super({ error, name: 'ForbiddenError' })
  }
}

class MethodNotAllowedError extends Error {
  constructor(error) {
    super({ error, name: 'MethodNotAllowedError' })
  }
}

class TimeoutError extends Error {
  constructor(error) {
    super({ error, name: 'TimeoutError' })
  }
}

const Errors = {
  Error,
  RequestError,
  ValidationError,
  NotFoundError,
  InvalidOperationError,
  ForbiddenError,
  MethodNotAllowedError,
  TimeoutError
}

export default Errors
