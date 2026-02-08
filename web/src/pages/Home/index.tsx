import { CreateLinkForm } from '@/components/createLinkForm'
import { LinksList } from '@/components/linksList'
import { Footer } from '@/components/Footer'
import logoBrevLy from '@/assets/images/logo-brev-ly.svg'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'

export default function Home() {
  useDocumentTitle('Brev.ly - Encurtador de Links')

  return (
    <div className="app">
      <main className="main">
        <div className="main-container">
          <header className="header">
            <img
              src={logoBrevLy}
              alt="Brev.ly"
              className="logo"
            />
          </header>
          <div className="main-content">
            <CreateLinkForm />
            <LinksList />
          </div>
        </div>

        <Footer />
      </main>
    </div>
  )
}
