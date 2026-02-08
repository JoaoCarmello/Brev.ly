import { api } from './api'
import type { CreateLinkFormData } from '@/schemas/createLinkSchema'

type ExportCSVResponse = {
  url: string
  fileName: string
}

export const createLink = async (data: CreateLinkFormData) => {
  const response = await api.post('/links', data)
  return response.data
}

export const getLinks = async () => {
  const response = await api.get('/links')
  return response.data
}

export const deleteLink = async (linkId: string) => {
  await api.delete(`/links/${linkId}`)
}

export const downloadLinksCSV = async (): Promise<ExportCSVResponse> => {
  const response = await api.get<ExportCSVResponse>('/links/export')
  return response.data
}
