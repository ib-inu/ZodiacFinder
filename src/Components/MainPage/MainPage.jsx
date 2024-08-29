import Faq from "./Faq";
import Heading from "./Heading";
import Search from "./Search";

function MainPage({ query, setQuery, modalShowsUp, count }) {
    return (
        <div className="main">
            <Heading />
            <Search modalShowsUp={modalShowsUp} query={query} setQuery={setQuery} count={count} />
            <div className="faqs">
                <Faq />
            </div>
        </div>
    );
}

export default MainPage;
