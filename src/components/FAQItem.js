import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
    const [showAnswer, setShowAnswer] = useState(false);

    const toggleAnswer = () => {
        setShowAnswer(!showAnswer);
    };

    return (
        <div style={{ marginBottom: '1rem', borderRadius: '8px', border: '1px solid #ccc', padding: '1rem', backgroundColor: "#596398" }}>
            <h3 style={{ margin: '0', cursor: 'pointer', fontSize: 25 }} onClick={toggleAnswer}>{question}</h3>
            {showAnswer && <p style={{ margin: '0',fontSize: 20, marginTop: '0.5rem' , color: 'white'}}>{answer}</p>}
        </div>
    );
};

export default FAQItem;
