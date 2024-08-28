const faq = [
    {
        question: "What is a Zodiac Sign?",
        answer: "A zodiac sign is one of the twelve divisions of the zodiac, which is a belt of the heavens centered on the ecliptic. Each sign corresponds to specific dates in the calendar and is associated with certain personality traits, behaviors, and even predictions based on astrology. The signs are typically linked to the position of the sun, moon, and other celestial bodies at the time of a person's birth, which astrologers believe influences an individual's character and destiny. The twelve zodiac signs are Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, and Pisces."
    },
    {
        question: "How to find this?",
        answer: `To find your zodiac sign, you simply need to know your birthdate. Each zodiac sign corresponds to a specific range of dates. Once you match your birthdate to the corresponding date range, you'll discover your zodiac sign . 
        This website helps you to find yours! :)`
    }
];

function Faq() {
    return (
        faq.map((q, i) =>
            <div className="faq" key={i}>
                <h2>{q.question}</h2>
                <p>{q.answer}</p>
            </div>
        )
    )
}

export default Faq
