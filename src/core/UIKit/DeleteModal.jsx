import React, { useState } from 'react';
import './DeleteModal.css'; // Создадим этот файл ниже

const DeleteModal = ({ onConfirm, onCancel, itemName, classNameBtn, btnOnClick, idInfo, icon = false }) => {
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => setIsOpen(false);
    const handleConfirm = () => { onConfirm(); closeModal(); }
    function btnClick() {setIsOpen(true); btnOnClick(idInfo); }

    return (
        <>
            {/* Кнопка для демонстрации - в реальном коде передавайте openModal как пропс */}
            {icon ?
                <div className={`icon-delete ${classNameBtn}`} onClick={() => btnClick()}>
                    {/* <svg width="78" height="54" viewBox="0 0 78 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M50.2184 18.4269L30.6217 38.0236C29.9521 38.6932 28.8416 38.6932 28.1721 38.0236C27.5025 37.3541 27.5025 36.2436 28.1721 35.574L47.7688 15.9773C48.4384 15.3077 49.5489 15.3077 50.2184 15.9773C50.888 16.6468 50.888 17.7573 50.2184 18.4269Z" fill="#F92626" />
                        <path d="M50.2184 38.0227C49.5489 38.6923 48.4384 38.6923 47.7688 38.0227L28.1721 18.426C27.5025 17.7564 27.5025 16.6459 28.1721 15.9764C28.8416 15.3068 29.9521 15.3068 30.6217 15.9764L50.2184 35.5731C50.888 36.2427 50.888 37.3532 50.2184 38.0227Z" fill="#F92626" />
                    </svg> */}

                    <svg width="50" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18 8V19C18 20.1046 17.1046 21 16 21H8C6.89543 21 6 20.1046 6 19V8H18ZM16 10H8V19H16V10ZM12 3C12.5523 3 13 3.44772 13 4V5H18C18.5523 5 19 5.44772 19 6C19 6.55228 18.5523 7 18 7H6C5.44772 7 5 6.55228 5 6C5 5.44772 5.44772 5 6 5H11V4C11 3.44772 11.4477 3 12 3Z" fill="#F0142F" />
                    </svg>

                </div>
                :
                <button onClick={() => btnClick()} className={classNameBtn}>
                    Удалить
                </button >
            }

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