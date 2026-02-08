import { z } from 'zod'

export const createLinkSchema = z.object({
    originalUrl: z.string().url('A URL deve ser válida'),

    shortCode: z.string().min(3, 'A URL encurtada deve ter pelo menos 3 caracteres')
        .regex(/^[a-zA-Z0-9_-]+$/, 'Formato Inválido!'),

})

export type CreateLinkFormData = z.infer<typeof createLinkSchema>