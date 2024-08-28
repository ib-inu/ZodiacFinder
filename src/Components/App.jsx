import { useState } from "react";
import MainPage from "./MainPage/MainPage";
import Modal from "./Modal/Modal";
import { zodiacSigns } from "../Data/zodiacData";


function App() {
    const [modal, setModal] = useState(false);
    const [query, setQuery] = useState('');
    const [date, setDate] = useState('');
    const [firstStep, setFirstStep] = useState(false);


    console.log(date, query);




    function getZodiacSign(day, month) {
        const formattedDate = `${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

        return zodiacSigns.find(sign => {

            if (sign.startDate <= sign.endDate) {
                return formattedDate >= sign.startDate && formattedDate <= sign.endDate;
            }
            else {
                return formattedDate >= sign.startDate || formattedDate <= sign.endDate;
            }
        });
    }

    const sign = getZodiacSign(date, query);


    function close() {
        setModal(false);
        setDate(0);
        setFirstStep(false);
        setQuery("");
    }





    function getDate(e) {
        setDate(+e.target.value)
    }

    return (
        <div className="container">
            <MainPage query={query} setQuery={setQuery} setModal={setModal} />
            {modal ? <Modal sign={sign} data={date} setData={setDate} close={close} getDate={getDate} getZodiacSign={getZodiacSign} firstStep={firstStep} setFirstStep={setFirstStep} /> : ''}
        </div >
    )
}

export default App


