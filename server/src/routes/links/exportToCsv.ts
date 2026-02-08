import { FastifyInstance } from 'fastify'
import { db } from '../../db'
import { uploads } from '../../db/schemas'
import { generateCSV } from '../../storage/csvExporter'
import {
  uploadFileToR2,
  getPublicUrl,
  getSignedUrlForFile,
} from '../../storage/client'
import { randomUUID } from 'crypto'

export async function exportToCsvRoute(server: FastifyInstance) {
  server.get('/links/export', async (_request, reply) => {
    try {
      const allLinks = await db
        .select()
        .from(uploads)
        .orderBy(uploads.createdAt)

      if (allLinks.length === 0) {
        return reply.send({
          message: 'Nenhum link encontrado para exportar',
          totalLinks: 0,
        })
      }

      const csvContent = generateCSV(allLinks)
      const now = new Date()

      const date = now.toISOString().split('T')[0]
      const time = now
        .toTimeString()
        .split(' ')[0]
        .replace(/:/g, '-')

      const fileName = `relatorio-links-${date}-${time}.csv`

      await uploadFileToR2(
        fileName,
        csvContent,
        'text/csv; charset=utf-8'
      )

      const publicUrl = getPublicUrl(fileName)
      const url = publicUrl
        ? publicUrl
        : await getSignedUrlForFile(fileName, 3600)

      return reply.send({
        message: 'CSV exportado com sucesso',
        fileName,
        url,
        totalLinks: allLinks.length,
      })
    } catch (error: any) {
      server.log.error(error)

      return reply.status(500).send({
        error: 'Erro ao exportar CSV',
        details: error.message,
      })
    }
  })
}
