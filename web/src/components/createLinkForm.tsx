import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createLink } from '@/services/links'
import { createLinkSchema, type CreateLinkFormData } from '@/schemas/createLinkSchema'
import { IconWarning } from '@/assets/icons/icon-warning'

export function CreateLinkForm() {
  const queryClient = useQueryClient()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CreateLinkFormData>({
    resolver: zodResolver(createLinkSchema),
  })

  const { mutateAsync } = useMutation({
    mutationFn: createLink,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['links'] })
      reset()
    },
  })

  async function onSubmit(data: CreateLinkFormData) {
    await mutateAsync(data)
  }

  return (
    <div className="card">
      <h2>Novo link</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label className="text-label-uppercase">
            Link original
          </label>

          <input
            type="url"
            placeholder="https://exemplo.com"
            className="form-input"
            {...register('originalUrl')}
          />

          {errors.originalUrl && (
            <p className="error-message">
              <IconWarning size={14} color="#B12C4D" />
              {errors.originalUrl.message}
            </p>
          )}
        </div>

        <div className="form-group">
          <label className="text-label-uppercase">
            Link encurtado
          </label>

          <div className="input-with-prefix">
            <span className="input-prefix">
              brev.ly/
            </span>

            <input
              type="text"
              placeholder="meu-link"
              className="input-with-prefix-input"
              {...register('shortCode')}
            />
          </div>

          {errors.shortCode && (
            <p className="error-message">
              <IconWarning size={14} color="#B12C4D" />
              {errors.shortCode.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="spinner" />
              Criando link...
            </>
          ) : (
            'Criar link'
          )}
        </button>

      </form>
    </div>
  )
}
