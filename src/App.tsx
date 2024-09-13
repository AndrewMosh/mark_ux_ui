import "./App.css";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import Player from "./Components/Player/Player";
function App() {
    const location = useLocation();

    const applyAppBodyClass = ["/"].includes(location.pathname);

    return (
        <div className="app">
            <Sidebar />
			<Player />

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
