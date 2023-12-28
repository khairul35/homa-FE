import React, { createContext, useContext, useState, ReactNode } from 'react';

type MessageType = 'success' | 'error' | 'loading';

type NotificationContextType = {
  showMessage: (message: string, type: MessageType) => void;
  notification: { message: string; type: MessageType }; // Include notification property
};

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
};

type NotificationProviderProps = {
  children: ReactNode;
};

export const NotificationProvider: React.FC<NotificationProviderProps> = ({ children }) => {
  const [notification, setNotification] = useState<{ message: string; type: MessageType }>({
    message: '',
    type: 'success',
  });

  const showMessage = (message: string, type: MessageType) => {
    setNotification({ message, type });
  };

  return (
    <NotificationContext.Provider value={{ showMessage, notification }}> {/* Include notification here */}
      {children}
      {/* Render the Notification component here */}
    </NotificationContext.Provider>
  );
};
