import { Badge } from '@mui/material';
import { useState } from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useQuery } from 'react-query';
import { getEmployees } from '../../../services/api';

const Notification = () => {
  const [notification, setNotification] = useState(0);

  useQuery('get-notifications', () => getEmployees(), {
    onSuccess: () => {
      setNotification(notification + 1);
    },
  });

  return (
    <Badge badgeContent={notification} color='error'>
      <NotificationsIcon />
    </Badge>
  );
};

export default Notification;
