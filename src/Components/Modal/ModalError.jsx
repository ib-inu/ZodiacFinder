function ModalError({ close, error }) {

    return (
        <>
            <div className="modal error">
                <div className="content">
                    <button className="close-modal" onClick={close}>&times;</button>
                    <p>{error}</p>
                    <div className="birthdate">
                        <h1>try again</h1>
                    </div>

                </div>
            </div >
            <div className="overlay"></div>
        </>
    )
}

export default ModalError