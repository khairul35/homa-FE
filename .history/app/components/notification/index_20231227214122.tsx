// components/Notification.tsx

import { useState, useEffect } from 'react';

type MessageType = 'success' | 'error' | 'loading';

type NotificationProps = {
  message: string;
  type: MessageType;
};

const Notification = ({ message, type }: NotificationProps) => {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    setShowNotification(true);

    const timeout = setTimeout(() => {
      setShowNotification(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [message]);

  let bgColor = '';
  switch (type) {
    case 'success':
      bgColor = 'bg-green-500';
      break;
    case 'error':
      bgColor = 'bg-red-500';
      break;
    case 'loading':
      bgColor = 'bg-blue-500';
      break;
    default:
      bgColor = 'bg-gray-800';
      break;
  }

  return (
    <div
      className={`${
        showNotification ? 'fixed bottom-5 right-5' : 'hidden'
      } ${bgColor} text-white px-4 py-2 rounded-md shadow-md`}
    >
      {message}
    </div>
  );
};

export default Notification;
