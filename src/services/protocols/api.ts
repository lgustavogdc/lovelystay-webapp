export type HttpResponse<Body = any> = {
  statusCode: number
  body: Body
}

export type HttpRequest<Body = any> = {
  headers?: any
  url: string
  body?: Body
  query?: any
  params?: any
}

export interface HttpGet {
  get: HttpGet.Signature
}

export namespace HttpGet {
  export type Signature = <Response>(getParams: Omit<HttpRequest, 'body'>) => Promise<HttpResponse<Response>>
}
