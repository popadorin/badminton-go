import React from 'react';
import {createNotification, Notification} from '../../models';
import {NotificationInfo} from '../NotificationInfo';
import {Divider} from '../Divider';

export function Home() {
  return (
    <div>
      <h1>Badminton go</h1>
      <h3>Notifications</h3>
      {
        dummyNotifications.map((notification, index) => (
          <React.Fragment key={index}>
            <NotificationInfo notification={notification}/>
            {index !== dummyNotifications.length - 1 && <Divider/>}
          </React.Fragment>
        ))
      }
    </div>
  );
}

const dummyNotifications: Notification[] = [
  createNotification('Training', 'Tuesday 8:00'),
  createNotification('Training', 'Thursday 8:00'),
  createNotification('Play', 'Saturday 10:00'),
  createNotification('Play', 'Sunday 15:00')
];
