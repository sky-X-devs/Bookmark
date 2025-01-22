import { useState } from "react";
import IconDown from './../ions/down-chevron-svgrepo-com.svg';

export function FAQ() {
    const [activeQuestion, setActiveQuestion] = useState(null);

    const toggleQuestion = (index) => {
        setActiveQuestion((prev) => (prev === index ? null : index));
    };

    const faqs = [
        { question: "What is Bookmark?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?" },
        { question: "How can I request a new browser?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?" },
        { question: "Is there a mobile app?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?" },
        { question: "What about other Chromium browsers?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?" },
    ];

    return (
        <div className="p-10 flex flex-col items-center ">
            <div>
                <p className="text-4xl text-center p-8">Frequently Asked Questions</p>
                <p className="h-16 font-pretty text-center">
                    Here are some of our FAQs. If you have any other questions you'd like answered, please feel free to email us.
                </p>
            </div>
            <div className="flex flex-col self-center w-full md:max-w-xl justify-center">
                {faqs.map((faq, index) => (
                    <div key={index} className="text-slate-500 pt-8">
                        <button
                            className="flex justify-between items-center w-full hover:text-red-500"
                            onClick={() => toggleQuestion(index)}
                        >
                            <span>{faq.question}</span>
                            <img
                                src={IconDown}
                                alt="toggle"
                                className={`w-8 h-6 transform transition-transform duration-500 ${activeQuestion === index ? 'rotate-180' : 'rotate-0'}`}
                            />
                        </button>
                        {activeQuestion === index && (
                            <p className="transition duration-500 pt-2">{faq.answer}</p>
                        )}
                        <p className="w-full h-0.5 bg-slate-400 mt-4"></p>
                    </div>
                ))}
            </div>
        </div>
    );
}
