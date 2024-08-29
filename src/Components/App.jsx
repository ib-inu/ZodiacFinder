import { useState, useEffect } from "react";
import MainPage from "./MainPage/MainPage";
import Modal from "./Modal/Modal";
import { zodiacSigns } from "../Data/zodiacData";

function App() {
    const [modal, setModal] = useState(false);
    const [query, setQuery] = useState('');
    const [date, setDate] = useState('');
    const [firstStep, setFirstStep] = useState(false);
    const [error, setError] = useState('');
    const [sign, setSign] = useState(null);

    useEffect(() => {
        if (date && query) {
            const [day, month] = [parseInt(date), parseInt(query)];
            const foundSign = getZodiacSign(day, month);
            setSign(foundSign);
        }
    }, [date, query]);



    function getZodiacSign(day, month) {
        if (month < 1 || month > 12) {
            setError("Please enter a valid month (1-12).");
            return null;
        }

        const formattedDate = `${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

        let maxDays = 31;
        if (month === 2) {
            maxDays = 29;
        } else if ([4, 6, 9, 11].includes(month)) {
            maxDays = 30;
        }

        if (day < 1 || day > maxDays) {
            setError(`Please enter a valid day (1-${maxDays}) for month ${month}.`);
            return null;
        }

        setError("");

        return zodiacSigns.find(sign => {
            if (sign.startDate <= sign.endDate) {
                return formattedDate >= sign.startDate && formattedDate <= sign.endDate;
            } else {
                return formattedDate >= sign.startDate || formattedDate <= sign.endDate;
            }
        });
    }

    function close() {
        setModal(false);
        setDate('');
        setFirstStep(false);
        setQuery("");
        setSign(null);
    }

    function getDate(e) {
        setDate(e.target.value);
    }

    return (
        <div className="container">
            <MainPage query={query} setQuery={setQuery} setModal={setModal} />
            {modal ? (
                <Modal
                    error={error}
                    sign={sign}
                    data={date}
                    setData={setDate}
                    close={close}
                    getDate={getDate}
                    firstStep={firstStep}
                    setFirstStep={setFirstStep}
                />
            ) : null}
        </div>
    );
}

export default App;
