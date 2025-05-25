import React, { useState } from 'react';
import './DeleteModal.css'; // Создадим этот файл ниже

const DeleteModal = ({ onConfirm, onCancel, itemName, classNameBtn, btnOnClick, idInfo }) => {
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => setIsOpen(false);

    const handleConfirm = () => {
        onConfirm();
        closeModal();
    };

    function btnClick() {
        setIsOpen(true)
        btnOnClick(idInfo)
    }

    return (
        <>
            {/* Кнопка для демонстрации - в реальном коде передавайте openModal как пропс */}
            <button onClick={() => btnClick()} className={classNameBtn}>
                Удалить
            </button >

            {isOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h3>Подтверждение удаления</h3>
                        <p>Вы точно хотите удалить {itemName}? Это действие нельзя отменить.</p>

                        <div className="modal-actions">
                            <button
                                onClick={handleConfirm}
                                className="confirm-button"
                            >
                                Удалить
                            </button>
                            <button
                                onClick={closeModal}
                                className="cancel-button"
                            >
                                Отмена
                            </button>
                        </div>
                    </div>
                </div>
            )
            }
        </>
    );
};

export default DeleteModal;