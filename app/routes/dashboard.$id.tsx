import { useParams } from "@remix-run/react"

const DashboardId = () => {
  const { id } = useParams()

  return (
    <div>
      <p>Dashboard with id: {id}</p>
    </div>
  )
}

export default DashboardId