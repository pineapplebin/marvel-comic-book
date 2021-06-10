import axios from 'axios'

const comicvineInstance = axios.create({
  baseURL: '/api',
  params: {
    api_key: 'c2f249d1154d46cafade15964fc765976ab1ec54',
    format: 'json',
  },
})

export interface FetchComicvineParams {
  path: string
  filter?: Record<string, string>
  sort?: Record<string, string>
  field?: string[]
}

function transParams(params: Record<string, string>): string {
  return Object.entries(params)
    .map(([key, value]) => `${key}:${value}`)
    .join(',')
}

export async function fetchComicvine<Resp = any>(data: FetchComicvineParams): Promise<Resp> {
  const params: any = {}
  if (data.filter) {
    params.filter = transParams(data.filter)
  }
  if (data.sort) {
    params.sort = transParams(data.sort)
  }
  if (data.field) {
    params.field_list = data.field.join(',')
  }

  return comicvineInstance.get(data.path, { params })
}
