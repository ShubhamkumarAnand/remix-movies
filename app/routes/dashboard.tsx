import { Outlet } from "@remix-run/react"

const dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <Outlet/>
    </div>
  )
}

export default dashboard