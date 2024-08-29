function ModalError({ close, error }) {

    return (
        <>

            <div className="content error">
                <button className="close-modal" onClick={close}>&times;</button>
                <p>{error}</p>
                <div className="birthdate">
                    <h1>try again</h1>
                </div>

            </div>
        </>
    )
}

export default ModalError