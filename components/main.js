import CreateForm from './CreateForm'
import ReportTable from './ReportTable'
import { useState, useEffect } from 'react'
import { hourly_sales } from '../public/hourly_sales'
import Header from './Header'
export default function Main() {
  const [Locations, setLocation] = useState([])
  const handleNewLocation = (location) => {
    if (Locations.map((item) => item.location).includes(location)) {
      return alert('Data Have Been Saved Successfully ')
    }
    setLocation((old) => {
      return [
        ...old,
        {
          location,
          hourly_sales,
        },
      ]
    })
  }
  return (
    <main className="flex flex-col h-screen">
      <Header/>
      <CreateForm handleNewLocation={handleNewLocation} />{' '}
      <ReportTable Locations={Locations} />{' '}
    </main>
  )
}
