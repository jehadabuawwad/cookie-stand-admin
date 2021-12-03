import Header from './Header'
import CreateForm from './CreateForm'
import ReportTable from './ReportTable'
import Footer from './Footer'
export default function Main({ stands, createResource, deleteResource }) {
  return (
    <main className="flex flex-col h-screen">
      <Header />
      <CreateForm createResource={createResource} />
      <ReportTable stands={stands} deleteResource={deleteResource}/>
      <Footer stands={stands}></Footer>
    </main>
  )
}
