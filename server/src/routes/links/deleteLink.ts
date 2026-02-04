import { FastifyInstance } from 'fastify';
import { db } from '../../db/index';
import { uploads } from '../../db/schemas';
import { eq } from 'drizzle-orm';

export const deleteLinkRoute = async (server: FastifyInstance) => {
  server.delete('/links/:id', async (request, reply) => {
    try {
      const { id } = request.params as { id: string };

      const deletedLink = await db
        .delete(uploads)
        .where(eq(uploads.id, id))
        .returning();

      if (deletedLink.length === 0) {
        return reply.status(404).send({ error: 'Link não encontrado' });
      }

      return reply.status(200).send({ message: 'Link deletado com sucesso' });
    } catch (error) {
      server.log.error(error);
      return reply.status(500).send({ error: 'Erro interno do servidor' });
    }
  });
}


