import Footer from "../components/Footer"
import UserNavBar from "../components/UserNavBar"
import { Outlet } from "react-router-dom"

const UserLayout = () => {
    return (
        <div>
            <UserNavBar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default UserLayout
