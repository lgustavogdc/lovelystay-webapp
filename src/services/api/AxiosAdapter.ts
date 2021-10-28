import axios from 'axios'
import { HttpGet, HttpRequest, HttpResponse } from 'src/services/protocols/api'

export class AxiosAdapterGet<ResponseBody = any> implements HttpGet<ResponseBody> {
  async get(getParams: Omit<HttpRequest, 'body'>): Promise<HttpResponse<ResponseBody>> {
    const response = await axios.get<ResponseBody>('http://localhost:3000' + getParams.url, { params: getParams.params })
    return {
      statusCode: response.status,
      body: response.data,
    }
  }
}

export default {
  get: AxiosAdapterGet
}