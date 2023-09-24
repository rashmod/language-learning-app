export type TCustomError = { statusCode: number; errorName: string } & Error;

export class CustomError extends Error {
	statusCode: number;
	errorName: string;

	constructor(message: string, statusCode = 500, errorName = 'ServerError') {
		super(message);
		this.statusCode = statusCode;
		this.errorName = errorName;

		this.name = this.constructor.name;
	}
}

export class NotFoundError extends CustomError {
	constructor(message = 'Not Found') {
		super(message, 404, 'NotFoundError');
	}
}

export class DuplicateResourceError extends CustomError {
	constructor(
		message = 'A resource with this value already exists. Please choose different value.'
	) {
		super(message, 409, 'DuplicateResourceError');
	}
}
