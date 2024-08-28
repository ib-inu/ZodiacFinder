import Faq from "./Faq"
import Heading from "./Heading"
import Search from "./Search"


function MainPage({ setModal, query, setQuery }) {
    return (
        <div className="main">
            <Heading />
            <Search setModal={setModal} query={query} setQuery={setQuery} />
            <div className="faqs">
                <Faq />
            </div>
        </div>
    )
}

export default MainPage
