export class APIError {
  constructor(data) {
    this.message = typeof data?.message === "string"
      ? data.message
      : "Internal server error";
    this.errors = data?.errors ?? [];
  }
}
