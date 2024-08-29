function ZodiacSIgn({ sign, close }) {
    return (
        <>
            <button className="close-modal" onClick={close}>&times;</button>
            <div className="content-img">
                <span>{sign.image}</span>
            </div>
            <div className="content-text">
                <span>You&apos;ve got :</span>
                <h1>{sign.name}</h1>
                <p>{sign.description}</p>
            </div>
        </>
    )
}

export default ZodiacSIgn
