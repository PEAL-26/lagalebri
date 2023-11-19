import { NotificationProps } from '@/shared/notification';

interface NotificationErrorProps {
  message: string;
  name: string;
}

export class NotificationError extends Error {
  public errors: NotificationErrorProps[] = [];

  constructor(
    notifications: NotificationProps | NotificationProps[],
    ...rest: NotificationProps[]
  ) {
    super();

    if (Array.isArray(notifications)) {
      notifications.forEach((notification) => {
        this.errors.push({
          message: `${notification.property} : ${notification.message}`,
          name: 'ValidationError',
        });
      });
    } else {
      this.errors.push({
        message: `${notifications.property} : ${notifications.message}`,
        name: 'ValidationError',
      });
    }

    rest.forEach((notification) => {
      this.errors.push({
        message: `${notification.property} : ${notification.message}`,
        name: 'ValidationError',
      });
    });
  }
}
