function Modal({ close, getDate, date, sign, firstStep, setFirstStep }) {




    console.log(sign);



    return (
        <>
            <div className="modal">
                <div className="content">

                    {firstStep ?
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
                        </> : <div className="birthdate">
                            <h1>Which day:</h1>
                            <input value={date} onChange={getDate} placeholder="enter the date..." type="number"
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
