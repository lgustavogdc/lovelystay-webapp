import axios from 'axios'
import { HttpGet, HttpRequest, HttpResponse } from 'src/services/protocols/api'

export class AxiosAdapterGet implements HttpGet {
  constructor(private readonly baseUrl: string) {}

  async get<ResponseBody = any>(getParams: Omit<HttpRequest, 'body'>): Promise<HttpResponse<ResponseBody>> {
    const response = await axios.get<ResponseBody>(this.baseUrl + getParams.url, { params: getParams.params })
    return {
      statusCode: response.status,
      body: response.data,
    }
  }
}
