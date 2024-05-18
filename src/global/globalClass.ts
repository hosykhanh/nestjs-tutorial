export class ResponseData<D> {
  data: D | D[];
  stattusCode: number;
  message: string;

  constructor(data: D | D[], statusCode: number, message: string) {
    this.data = data;
    this.stattusCode = statusCode;
    this.message = message;

    return this;
  }
}
