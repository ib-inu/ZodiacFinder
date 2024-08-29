import { useEffect, useState } from "react";
import ModalError from "./ModalError";
import ZodiacSIgn from "./ZodiacSIgn";
import FirstStep from "./FirstStep";

function Modal({ close, getDate, date, sign, firstStep, setFirstStep, error, modalRef }) {

    const [alert, setAlert] = useState(false);


    useEffect(() => {
        if (modalRef.current && !firstStep) {
            modalRef.current.focus();
        }
    }, [firstStep, modalRef]); // Added modalRef to the dependency array

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    };

    function handleSubmit() {
        if (!date) {
            setAlert(true)
            return;
        }
        setFirstStep(true)
        setAlert(false)
    }
    return (
        <>
            <div className="overlay"></div>
            <div className="modal">
                {firstStep ? (
                    <>
                        {sign ? (
                            <ZodiacSIgn sign={sign} close={close} />
                        ) : (
                            <ModalError error={error} close={close} />
                        )}
                    </>
                ) : (
                    <FirstStep modalRef={modalRef} date={date} getDate={getDate} handleKeyPress={handleKeyPress} setFirstStep={setFirstStep}
                        handleSubmit={handleSubmit} alert={alert} />
                )}
            </div>
        </>
    );
}

export default Modal;
