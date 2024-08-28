import { useState } from "react";
import Button from "../../helper/Button"

function Search({ setModal, query, setQuery }) {
    const [count, setCount] = useState(0);




    function modelShowsUp() {
        setModal(true);
        setCount(c => c + 1);
    }



    return (
        <div className="search">
            <p>Discover your <span>super power</span> by entering your birth month
            </p>

            <input type="number" value={query} placeholder={count > 0 ? "check again..." : "give it a try..."} onChange={e => setQuery(e.target.value)} />

            <Button text="&#10143;" onClick={modelShowsUp} />

        </div>

    )
}

export default Search
