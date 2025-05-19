export default function FromRegLog({
    children,
    formTitle,
    submitText = 'Отправить',
    onSubmit,
    className = '',
    id = "",
    formType,
    disciption = {},
}) {

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit?.();
    };

    return (
        <div className="container">
            <div className={`form__container form-${formType} ${className}`.trim()}>
                {formTitle && <h2 className="form__title h3">{formTitle}</h2>}

                <form
                    id={id}
                    className="form__body"
                    onSubmit={handleSubmit}
                    noValidate
                >
                    <div className="form__inputs">
                        {children}
                    </div>

                    <div className="form__actions">
                        <button type="submit" className="form__button _btn _blue">
                            {submitText}
                        </button>
                    </div>

                    {disciption && <p className="form__disciption">{disciption}</p>}

                </form>
            </div>
        </div>
    );
}
