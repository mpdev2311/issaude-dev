const successfulCodeStatuses = [
    200,
    201
];

function IsSuccessfulStatusCode(code: number): boolean {
    return successfulCodeStatuses.includes(code);
}

export { IsSuccessfulStatusCode };