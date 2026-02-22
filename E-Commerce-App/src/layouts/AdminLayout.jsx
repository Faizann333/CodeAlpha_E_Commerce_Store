import AdminNavbar from '../components/admin/AdminNavbar'
import  {Outlet} from 'react-router-dom'
import Footer from '../components/Footer'
const AdminLayout = () => {
  return (
    <div>
      <AdminNavbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default AdminLayout
