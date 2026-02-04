import { FastifyInstance } from 'fastify';
import { db } from '../../db/index';
import { uploads } from '../../db/schemas';

export const listLinksRoute = async (server: FastifyInstance) => {
  server.get('/links', async (_request, reply) => {
    try {
      const allLinks = await db.select().from(uploads).orderBy(uploads.createdAt);
      return reply.send(allLinks);
    } catch (error) {
      server.log.error(error);
      return reply.status(500).send({ error: 'Erro interno do servidor' });
    }
  });
}


