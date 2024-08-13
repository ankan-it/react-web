
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <>
            <div class="container-scroller">
                <Sidebar />
                <div class="container-fluid page-body-wrapper">
                    <Navbar />
                    <div class="main-panel">
                        <Outlet />
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    )
}