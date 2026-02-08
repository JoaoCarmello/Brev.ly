import { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { env } from '@/env'
import logoRedirect from '@/assets/images/logo-redirect.png'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'

export default function Redirect() {
  useDocumentTitle('Redirecionando... - Brev.ly')

  const { shortCode } = useParams<{ shortCode: string }>()
  const navigate = useNavigate()
  const [targetUrl, setTargetUrl] = useState<string | null>(null)

  // 👇 FLAG QUE IMPEDE DUPLA EXECUÇÃO
  const hasFetched = useRef(false)

  useEffect(() => {
    if (!shortCode) {
      navigate('/404')
      return
    }
    if (hasFetched.current) return
    hasFetched.current = true

    async function fetchUrl() {
      try {
        const res = await fetch(
          `${env.backendUrl}/links/${shortCode}`
        )

        if (!res.ok) {
          navigate('/404')
          return
        }

        const data = await res.json()
        setTargetUrl(data.originalUrl)

        setTimeout(() => {
          window.location.href = data.originalUrl
        }, 800)
      } catch {
        navigate('/404')
      }
    }

    fetchUrl()
  }, [shortCode, navigate])

  return (
    <div className="app">
      <main className="main">
        <div className="main-container">
          <div className="card card-redirect">
            <div className="logo-redirect-container">
              <img src={logoRedirect} alt="Brev.ly" />
            </div>

            <div className="redirect-loading">
              <h2>Redirecionando...</h2>
              <div className="redirect-spinner" />
            </div>

            <div className="redirect-message-container">
              <p>O link será aberto automaticamente.</p>
              {targetUrl && (
                <p>
                  Não foi redirecionado?{' '}
                  <a href={targetUrl} target="_blank" rel="noreferrer">
                    Acesse aqui
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
