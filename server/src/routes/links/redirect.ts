import { FastifyInstance } from 'fastify';
import { db } from '../../db/index';
import { uploads } from '../../db/schemas';
import { eq, sql } from 'drizzle-orm';

export const redirectRoute = async (server: FastifyInstance) => {
  server.get('/:shortCode', async (request, reply) => {
    try {
      const { shortCode } = request.params as { shortCode: string };

      const link = await db
        .select()
        .from(uploads)
        .where(eq(uploads.shortCode, shortCode))
        .limit(1);

      if (link.length === 0) {
        return reply.status(404).send({ error: 'Link não encontrado' });
      }

      const foundLink = link[0]!;
      await db
        .update(uploads)
        .set({
          clickCount: sql`click_count + 1`
        })
        .where(eq(uploads.id, foundLink.id));

      return reply.send({ originalUrl: foundLink.originalUrl, clickCount: foundLink.clickCount });
    } catch (error) {
      server.log.error(error);
      return reply.status(500).send({ error: 'Erro interno do servidor' });
    }
  });
};
