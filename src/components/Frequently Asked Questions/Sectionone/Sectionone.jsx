import React, { useState } from 'react';
import './Sectionone.css';

const Sectionone = () => {
  const [openQuestion, setOpenQuestion] = useState(2); // Question 3 is open by default

  const questions = [
    {
      id: 0,
      question: "هل لديك ترخيص؟",
      answer: "",
      isOpen: false
    },
    {
      id: 1,
      question: "ماهي اوقات العمل؟",
      answer: "",
      isOpen: false
    },
    {
      id: 2,
      question: "هل توجد رسوم إدارية؟",
      answer: "نعم، للأفراد 1٪ من مبلغ التمويل أو 5,000 ريال (أيهما أقل)",
      isOpen: true
    },
    {
      id: 3,
      question: "ماهي أنواع التمويل التي تقدمها فيول للتمويل؟",
      answer: "",
      isOpen: false
    },
    {
      id: 4,
      question: "هل يمكنني الحصول على تمويل إضافي؟",
      answer: "",
      isOpen: false
    },
    {
      id: 5,
      question: "هل يوجد خصم عند الداد المبكر؟",
      answer: "",
      isOpen: false
    },
    {
      id: 6,
      question: "هل التعثر عن الشركات الأخرى يؤثر مع التمويل لديكم؟",
      answer: "",
      isOpen: false
    },
    {
      id: 7,
      question: "هل التمويل متاح للمتقاعدين؟",
      answer: "",
      isOpen: false
    },
    {
      id: 8,
      question: "هل التمويل متاح لموظفي القطاع الخاص؟",
      answer: "",
      isOpen: false
    }
  ];

  const toggleQuestion = (id) => {
    setOpenQuestion(openQuestion === id ? -1 : id);
  };

  return (
    <div className="faq-container">
      <div className="faq-questions">
        {questions.map((item) => (
          <div 
            key={item.id} 
            className={`faq-question ${openQuestion === item.id ? 'open' : ''}`}
          >
            <div className="question-header" onClick={() => toggleQuestion(item.id)}>
              <div className="question-text">{item.question}</div>
              <div className="question-icon">
                {openQuestion === item.id ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 14L12 9L17 14" stroke="#2C8A57" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5V19" stroke="#2C8A57" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 12H19" stroke="#2C8A57" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
            </div>
            {openQuestion === item.id && item.answer && (
              <div className="question-answer">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sectionone;
