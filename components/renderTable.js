import { working_time } from '../public/workingTime'

export default function RenderTable({  Locations }) {
  return (
    <>
      { Locations.map((item, index) => {
        return (
          <tr key={index}>
            <th
              className={`bg-green-500 border border-black ${
                index % 2 ? 'bg-green-300' : 'bg-green-400'
              }`}
            >
              {item.location}
            </th>
            {item.hourly_sales.map((item, index) => (
              <td
                key={index}
                className={`border border-black text-center	 ${
                  index % 2 ? 'bg-green-300' : 'bg-green-400'
                }`}
              >
                {item}
              </td>
            ))}
            <th
              className={`bg-green-500 border border-black ${
                index % 2 ? 'bg-green-300' : 'bg-green-400'
              }`}
            >
              {item.hourly_sales.reduce((total, item) => total + item, 0)}
            </th>
          </tr>
        )
      })}
    </>
  )
}
