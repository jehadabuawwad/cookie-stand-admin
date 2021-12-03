import { working_time } from '../public/workingTime'
import { useEffect, useState } from 'react'
import RenderTable from './renderTable'
export default function ReportTable(props) {
  
  const [totals,setTotals]=useState(0)
  
  useEffect(() => {
    let totals = new Array(14).fill(0).map((item, index) =>
      props.Locations
        .map((item) => item.hourly_sales)
        .map((val) => val[index])
        .reduce((total, element) => total + element, 0),
    )
    setTotals(totals)
  })

  return (
    <>
      {props.Locations.length ? (
        <table className="m-auto mt-10 table-auto w-100">
          <thead>
            <tr>
              <th className="w-3/12 bg-green-400 border border-none">
                Location
              </th>
              {working_time.map((item, index) => (
                <th key={index} className="bg-green-400 border-none">
                  {item}
                </th>
              ))} 
              <th className="bg-green-400 border-none">Totals</th>
            </tr>
          </thead>
          <tbody>
            <RenderTable {...props} />
          </tbody>
          <tfoot>
            <tr>
              <th className="bg-green-400 border-none">Totals</th>
              {totals.map((item, index) => (
                <th key={index} className="bg-green-400 border-none">
                  {item}
                </th>
              ))}
              <th className="bg-green-400 border-none">
                {totals.reduce((tot, itm) => tot + itm, 0)}
              </th>
            </tr>
          </tfoot>
        </table>
      ) : (
        <h2 className="mt-12 text-3xl text-center">
          No Cookie Stands Available
        </h2>
      )}
    </>
  );
}
