import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className='md:flex md:min-h-screen'>
      <aside className="md:w-1/4 bg-blue-900 px-5 py-10">
        <h2 className="text-4xl font-black text-center text-white">CRM - Clients</h2>
      </aside>
      <div className="md:w-3/4 p-10 md:h-screen overflow-scroll">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
