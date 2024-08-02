import React, { createContext, useCallback, useState, ReactNode } from 'react';

interface GlobalContextProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onCloseModal: () => void;
  openSignUpModal: () => void;
  controlModal: boolean | undefined;
  settingsSignUpModal: () => void;
}

export const Globalcontext = createContext<GlobalContextProps | undefined>(undefined);

interface GlobalStateProps {
  children: ReactNode;
}

export const GlobalState: React.FC<GlobalStateProps> = ({ children }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [controlModal, setControlModal] = useState<boolean | undefined>(undefined);

  const onOpenModal = (): void => {
    setOpen(true);
    setControlModal(true);
  };

  const onCloseModal = (): void => {
    setOpen(false);
    setControlModal(false);
  };

  const openSignUpModal = useCallback((): void => {
    setTimeout(() => {
      setControlModal(true);
      onOpenModal();
    }, 3000);
  }, [controlModal]);

  const settingsSignUpModal = useCallback((): void => {
    setControlModal(true);
    onOpenModal();
  }, [controlModal]);

  return (
    <Globalcontext.Provider
      value={{
        open,
        setOpen,
        onCloseModal,
        openSignUpModal,
        controlModal,
        settingsSignUpModal,
      }}
    >
      {children}
    </Globalcontext.Provider>
  );
};

export default GlobalState;
