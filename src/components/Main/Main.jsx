import React from "react";
import { useContext } from "react";
import "./Main.css";
import { Context } from "../../context/Contex";

const Main = () => {
    const {
        onSent,
        recentPrompt,
        showResults,
        loading,
        resultData,
        setInput,
        input,
    } = useContext(Context);

    const handleCardClick = (promptText) => {
        setInput(promptText);
    };
    return (
        <div className="main">
            <div className="nav">
                <p>Gemini</p>
                <img src="images/boy.png" alt="" />
            </div>
            <div className="main-container">
                {!showResults ? (
                    <>
                        <div className="greet">
                            <p>
                                <span>Hello , Dev </span>
                            </p>
                            <p>How Can i Help You Today?</p>
                        </div>
                        <div className="cards">
                            <div
                                className="card"
                                onClick={() =>
                                    handleCardClick("Suggest Some Place To Visit In India.")
                                }
                            >
                                <p>Suggest Some Place To Visit In India.</p>
                                <img src="images/compass.png" alt="" />
                            </div>
                            <div
                                className="card"
                                onClick={() =>
                                    handleCardClick(
                                        "Explain the process of photosynthesis in simple terms"
                                    )
                                }
                            >
                                <p>Explain the process of photosynthesis in simple terms </p>
                                <img src="images/compass.png" alt="" />
                            </div>
                            <div
                                className="card"
                                onClick={() =>
                                    handleCardClick(
                                        "How do you create a responsive navbar using CSS and JavaScript?"
                                    )
                                }
                            >
                                <p>
                                    How do you create a responsive navbar using CSS and
                                    JavaScript?
                                </p>
                                <img src="images/bulb.png" alt="" />
                            </div>
                            <div
                                className="card"
                                onClick={() => {
                                    handleCardClick(
                                        "What are some essential skills for becoming a front-end developer?"
                                    );
                                }}
                            >
                                <p>
                                    What are some essential skills for becoming a front-end
                                    developer?
                                </p>
                                <img src="images/code.png" alt="" />
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="result">
                        <div className="result-title">
                            <img src="images/boy.png" alt="" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src="images/icon.png" alt="" />
                            {loading ? (
                                <div className="loader">
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                            ) : (
                                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            )}
                        </div>
                    </div>
                )}

                <div className="main-bottom">
                    <div className="search-box">
                        <input
                            onChange={(e) => {
                                setInput(e.target.value);
                            }}
                            value={input}
                            type="text"
                            placeholder="Enter the Prompt Here"
                        />
                        <div>
                            <img src="images/gallery.png" alt="" />
                            <img src="images/mic.png" alt="" />
                            <img
                                src="images/send_icon.png"
                                alt=""
                                onClick={() => {
                                    onSent();
                                }}
                            />
                        </div>
                    </div>
                    <div className="bottom-info">
                        <p>
                            Gemini may display inaccurate info, including about people, so
                            double-check its responses. Your privacy & Gemini Apps
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
