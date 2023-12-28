// context/NotificationContext.tsx

import React, { createContext, useContext, useState } from 'react';

type MessageType = 'success' | 'error' | 'loading';

type NotificationContextType = {
  showMessage: (message: string, type: MessageType) => void;
};

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
};

export const NotificationProvider: React.FC = ({ children }) => {
  const [notification, setNotification] = useState<{ message: string; type: MessageType }>({
    message: '',
    type: 'success',
  });

  const showMessage = (message: string, type: MessageType) => {
    setNotification({ message, type });
  };

  return (
    <NotificationContext.Provider value={{ showMessage }}>
      {children}
      {/* Render the Notification component here */}
    </NotificationContext.Provider>
  );
};
