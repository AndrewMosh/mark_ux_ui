import "./Button.scss";
export const Button = () => {
    return (
        <div className="button">
            <button className="button__btn" onClick={() => (window.location.href = "mailto: m.fromm.job@gmail.com")}>
                Начать проект
            </button>
        </div>
    );
};
