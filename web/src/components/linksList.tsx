import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getLinks, deleteLink, downloadLinksCSV } from '@/services/links'
import { IconDownload } from '@/assets/icons/icon-download'
import { IconTrash } from '@/assets/icons/icon-trash'
import { IconCopy } from '@/assets/icons/icon-copy'
import { env } from '@/env'
import { IconLink } from '@/assets/icons/icon-link'

type Link = {
  id: string
  shortCode: string
  originalUrl: string
  clickCount: number
}

const frontendUrl = env.frontendUrl

export function LinksList() {
  const queryClient = useQueryClient()

  const { data, isLoading, isError } = useQuery<Link[]>({
    queryKey: ['links'],
    queryFn: getLinks,
  })

  const { mutateAsync: deleteLinkMutation, isPending } = useMutation({
    mutationFn: deleteLink,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['links'] })
    },
  })

  async function handleDeleteLink(id: string) {
    const confirmed = window.confirm(
      'Tem certeza que deseja excluir este link?'
    )

    if (!confirmed) return

    await deleteLinkMutation(id)
  }

  async function handleDownloadCSV() {
    const { url, fileName } = await downloadLinksCSV()

    const a = document.createElement('a')
    a.href = url
    a.download = fileName
    document.body.appendChild(a)
    a.click()
    a.remove()
  }

  function handleCopy(shortCode: string) {
    const shortUrl = `${frontendUrl}/${shortCode}`
    navigator.clipboard.writeText(shortUrl)
  }

  const disableCSV =
    isLoading || isError || !data || data.length === 0

  return (
    <div className="card">
      <div className="card-header">
        <h2>Meus links</h2>

        <button
          className="btn btn-secondary"
          onClick={handleDownloadCSV}
          disabled={disableCSV}
        >
          <IconDownload size={16} color="#1F2025" />
          Baixar CSV
        </button>
      </div>

      {isLoading && (
        <div className="loading">
          <div className="spinner" />
          <span className="text-label-uppercase">
            Carregando links...
          </span>
        </div>
      )}

      {isError && (
        <div className="empty-state">
          <p className="error-message">
            Erro ao carregar links
          </p>
        </div>
      )}

      {!isLoading && data?.length === 0 && (
        <div className="empty-state">
          <IconLink size={32} color="#74798B" />
          <p className="text-label-uppercase">
            Ainda não existem links cadastrados
          </p>
        </div>
      )}

      {data && data.length > 0 && (
        <div className="link-list-container">
          {data.slice().reverse().map(link => (
            <div key={link.id} className="link-item">
              <div className="link-left">
                <a
                  href={`${frontendUrl}/${link.shortCode}`}
                  target="_blank"
                  rel="noreferrer"
                  className="link-code"
                >
                  {`${frontendUrl}/${link.shortCode}`}
                </a>

                <a
                  href={link.originalUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="link-url"
                >
                  {link.originalUrl}
                </a>
              </div>

              <div className="link-right">
                <span className="link-stats">
                  {link.clickCount} acessos
                </span>

                <div className="link-actions">
                  <button
                    className="action-btn"
                    title="Copiar link"
                    onClick={() => handleCopy(link.shortCode)}
                  >
                    <IconCopy size={16} color="#1F2025" />
                  </button>

                  <button
                    className="action-btn"
                    title="Excluir link"
                    disabled={isPending}
                    onClick={() => handleDeleteLink(link.id)}
                  >
                    <IconTrash size={16} color="#1F2025" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
