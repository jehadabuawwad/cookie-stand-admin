import PageHead from './Head'
import Main from './main'

export default function CookieStandAdmin({ stands, loading, createResource, deleteResource }) {
  return (
    <div className="max-w-lg">
        <PageHead/>
        <Main stands={stands} createResource={createResource} deleteResource={deleteResource} />
    </div>
  )
}
