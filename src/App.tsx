import "./App.css";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { Outlet, useLocation } from "react-router-dom";
function App() {
    const location = useLocation();

    const applyAppBodyClass = ["/"].includes(location.pathname);

    return (
        <div className="app">
            <Sidebar />
            {!applyAppBodyClass ? (
                <div className="app__body">
                    <Outlet />
                </div>
            ) : (
                <Outlet />
            )}
        </div>
    );
}

export default App;
