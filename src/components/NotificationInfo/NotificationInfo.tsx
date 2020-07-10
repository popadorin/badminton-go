import React from 'react'
import {Notification} from '../../models';

export function NotificationInfo({notification}: { notification: Notification }) {
  return (
    <div>
      <p>{notification.where}</p>
      <p>Type: {notification.gameType}</p>
      <p>{notification.when}</p>
    </div>
  );
}
