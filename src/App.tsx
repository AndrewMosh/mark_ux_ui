import "./App.css";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import { MediaInfoPlayer } from "./Components/MediaInfoPlayer/MediaInfoPlayer";
import { MobileBar } from "./Components/MobileBar/MobileBar";
import { useToggleMenuStore } from "./store/useToggleMenuStore";


function App() {
    const location = useLocation();
    const applyAppBodyClass = ["/"].includes(location.pathname);
	const { menuOpen } = useToggleMenuStore();

    return (
        <div className="app" >
            <Sidebar />

			<MobileBar />
			
			<MediaInfoPlayer />

            {!applyAppBodyClass ? (
                <div className="app__body" style={{overflow: menuOpen ? "hidden" : "auto"}} >
                    <Outlet />
                </div>
            ) : (
                <Outlet />
            )}
        </div>
    );
}

export default App;
