export interface HttpResponse<Body = any> {
  statusCode: number
  body: Body
}

export interface HttpRequest<Body = any> {
  headers?: any
  url: string
  body?: Body
  query?: any
  params?: any
}

export interface HttpGet<Response> {
  get: (getParams: Omit<HttpRequest, 'body'>) => Promise<HttpResponse<Response>>
}
