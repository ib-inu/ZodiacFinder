

function FirstStep({ modalRef, date, getDate, handleKeyPress, handleSubmit, alert }) {



    return (
        <div className="birthdate">
            <h1>Which day:</h1>
            <input
                ref={modalRef}
                min={1}
                max={31}
                value={date}
                onChange={getDate}
                placeholder="enter the date..."
                type="number"
                onKeyDown={handleKeyPress}
            />
            <button onClick={handleSubmit}>Confirm</button>
            {alert ? <p className="alert">please enter a number</p> : ''}
        </div>
    )
}

export default FirstStep
