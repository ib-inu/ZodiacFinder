import ModalError from "./ModalError";

function Modal({ close, getDate, date, sign, firstStep, setFirstStep, error }) {

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            setFirstStep(true);
        }
    };


    return (
        <>
            <div className="modal">
                <div className="content">

                    {firstStep ?
                        <>
                            {
                                sign ?
                                    <>
                                        <button className="close-modal" onClick={close}>&times;</button>
                                        <div className="content-img">
                                            <span>{sign.image}</span>
                                        </div>
                                        <div className="content-text">
                                            <span>you&apos;ve got :</span>
                                            <h1>{sign.name}</h1>
                                            <p>{sign.description}</p>
                                        </div>
                                    </>
                                    :
                                    <ModalError error={error} close={close} />
                            }
                        </> : <div className="birthdate">
                            <h1>Which day:</h1>
                            <input min={1} max={31} value={date} onChange={getDate} placeholder="enter the date..." type="number" onKeyDown={handleKeyPress}
                            />
                            <button onClick={() => setFirstStep(true)}>Confirm</button>
                        </div>
                    }
                </div>
            </div>
            <div className="overlay"></div>
        </>
    )
}

export default Modal
