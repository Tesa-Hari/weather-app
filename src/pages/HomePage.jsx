// import rea from "react";
import { useState } from "react";
import Daily from "../components/Daily";
import Location from "../components/Location";

function HomePage() {
    const [locationId, setLocationId] = useState(1);
    function selectLocation(id) {
        setLocationId(id);
    }
   
    return (
        <>
            {/* Navbar */}
            <Location callBackLocation={selectLocation} />
            <Daily locationId={locationId}/>
            {/* Weekly */}
            {/* Footer */}
            <h1>Homepage is rendered</h1>
        </>
    )
}

export default HomePage;