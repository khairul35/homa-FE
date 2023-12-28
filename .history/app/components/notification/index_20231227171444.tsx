'use client';

import { useState, useEffect } from 'react';

type NotificationProps = {
  message: string;
};

const Notification: React.FC<NotificationProps> = ({ message }) => {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    // Logic to show notification when message is received
    setShowNotification(true);

    // Automatically hide notification after a certain time
    const timeout = setTimeout(() => {
      setShowNotification(false);
    }, 5000); // Adjust time as needed

    return () => clearTimeout(timeout);
  }, [message]);

  return (
    <div
      className={`${
        showNotification ? 'fixed bottom-5 right-5' : 'hidden'
      } bg-gray-800 text-white px-4 py-2 rounded-md shadow-md`}
    >
      {message}
    </div>
  );
};

export default Notification;
