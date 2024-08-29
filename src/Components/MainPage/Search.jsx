import Button from "../../helper/Button";

function Search({ modalShowsUp, query, setQuery, count, alert }) {





    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            modalShowsUp();
        }
    };

    return (
        <div className="search">
            <p>Discover your <span>super power</span> by entering your birth month</p>
            <input
                min={1}
                max={12}
                type="number"
                value={query}
                placeholder={count > 0 ? "check again..." : "give it a try..."}
                onChange={e => setQuery(e.target.value)}
                onKeyDown={handleKeyPress}
            />
            <Button text="&#10143;" onClick={modalShowsUp} />
            {alert ? <p className="alert">please enter a value</p> : ''}
        </div>
    );
}

export default Search;
