import { useState } from "react";
import Button from "../../helper/Button"

function Search({ setModal, query, setQuery }) {
    const [count, setCount] = useState(0);




    function modelShowsUp() {
        setModal(true);
        setCount(c => c + 1);
    }
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            modelShowsUp()
        }
    };



    return (
        <div className="search">
            <p>Discover your <span>super power</span> by entering your birth month
            </p>

            <input min={1} max={12} type="number" value={query} placeholder={count > 0 ? "check again..." : "give it a try..."} onChange={e => setQuery(e.target.value)} onKeyDown={handleKeyPress} />

            <Button text="&#10143;" onClick={modelShowsUp} />

        </div>

    )
}

export default Search
