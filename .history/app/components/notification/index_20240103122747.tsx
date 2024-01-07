'use client'
import { useState, useEffect } from 'react';

type NotificationProps = {
  message: string;
  type: 'success' | 'error' | 'loading';
  closeMessage: () => void;
};

const Notification: React.FC<NotificationProps> = ({ message, type, closeMessage }) => {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    setShowNotification(true);

    const timeout = setTimeout(() => {
      setShowNotification(false);
      closeMessage();
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
        showNotification ? 'fixed top-5 left-1/2 -translate-x-1/2' : 'hidden'
      } ${bgColor} text-white px-4 py-2 rounded-md shadow-md mt-20`}
    >
      {message}
    </div>
  );
};

export default Notification;
