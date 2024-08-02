import React, { useState, useCallback } from 'react';

const Modal: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [controlModal, setControlModal] = useState<boolean>(false);

    const onOpenModal = (): void => {
        setOpen(true);
        setControlModal(true);
    };

    const onCloseModal = (): void => {
        setOpen(false);
        setControlModal(false);
    };

    const settingsSignUpModal = useCallback((): void => {
        setControlModal(true);
        onOpenModal();
    }, [controlModal]);

    return (
        <div>
            {/* Add your modal content here */}
        </div>
    );
};

export default Modal;
