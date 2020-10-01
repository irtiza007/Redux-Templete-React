import React from 'react';
import {
  NotificationManager,
  NotificationContainer,
} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
const ToastContainer = () => {
  return <NotificationContainer />;
};
const createNotification = (type, message, title, duration = 3000) => {
  switch (type) {
    case 'info':
      NotificationManager.info(message, title, duration);
      break;
    case 'success':
      NotificationManager.success(message, title, duration);
      break;
    case 'warning':
      NotificationManager.warning(message, title, duration);
      break;
    case 'error':
      NotificationManager.error(message, title, duration);
      break;
    default:
      NotificationManager.info('tada');
  }
};

export { createNotification, ToastContainer };
