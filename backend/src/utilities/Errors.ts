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

export class DuplicateEmailError extends CustomError {
	constructor(
		message = 'A user with this email already exists. Please choose different email address.'
	) {
		super(message, 409, 'DuplicateEmailError');
	}
}
