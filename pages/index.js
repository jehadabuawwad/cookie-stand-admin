  import Head from 'next/head'

  export default function Home() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="min-h-screen bg-green-50 ">
          <header className='p-6 bg-green-500 '>
            <h1 className='text-5xl'>Cookie Stand Admin</h1>
          </header>
          <form className="flex-col w-4/6 p-2 mx-auto my-8 bg-green-300 rounded-md">
            <fieldset>
              <h1 className="my-3 text-2xl text-center" type='text'>Cookie Stand Admin</h1>
              <div className="flex w-100">
                <label className="ml-16 ">Location</label>
                <input name="Location" className="flex w-10/12 ml-5 gray-100" />
              </div>
              <div className="flex w-4/5 gap-12 p-4 pb-5 ml-16" >
                <div className="flex-col w-1/4 ">
                  <label >Minimum Custumer per Hour</label>
                  <input type='integer' className="" name="Minimum" />
                </div>
                <div className="flex-col w-1/4 ">
                  <label >Maximum Custumer per Hour</label>
                  <input type='integer' className="" name="Maximum" />
                </div>
                <div className="flex-col w-1/4">
                  <div className="flex"></div><label >Average Cookies per Sales</label>
                  <input type='float' className="" name="Average" />
                </div>
                <button className="px-20 py-5 ml-4 bg-green-500 top-2 text-gray-50">Create</button>
              </div>
            </fieldset>
          </form>
          <table className="w-1/2 mx-auto my-4">
            <thead>
              <tr>
                <th className="">location</th>
                <th className="">minCustomers</th>
                <th className="">maxCustomers</th>
                <th className="">Average</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="pl-2 border border-gray-700">
                </td>
                <td className="pl-2 border border-gray-700">
                </td>
                <td className="pl-2 border border-gray-700">
                </td>
                <td className="pl-2 border border-gray-700">
                </td>
              </tr>
            </tbody>
          </table>
          <footer className="p-6 text-3xl bg-green-500">&copy;2021</footer>
        </main>
      </div>
    )
  }
