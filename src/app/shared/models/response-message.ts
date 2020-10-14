export interface ResponseMessage {
  data: Object
  messages: ResponseData[] | null
  errors: ResponseData[] | null
}

export interface ResponseData {
  code: number
  message: string
  href:    string
}
