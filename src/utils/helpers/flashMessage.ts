import {
  showMessage,
  MessageType,
  MessageTypeIcon,
  PositionAlertMessage,
} from '~/utils';

type Props = {
  open?: boolean;
  title?: string;
  position?: PositionAlertMessage;
  autoHide?: boolean;
  type?: MessageType;
  description?: string;
  onPress?(): void;
  onLongPress?(): void;
  duration?: number;
  icon?: MessageTypeIcon;
  floating?: boolean;
  hideOnPress?: boolean;
};

export default ({
  duration = 5000,
  position = 'top',
  autoHide = true,
  type = 'success',
  title = '',
  description = '',
  onPress,
  onLongPress,
  icon,
  floating,
  hideOnPress = true,
}: Props): void => {
  showMessage({
    hideOnPress,
    floating,
    icon,
    duration,
    onPress,
    onLongPress,
    position,
    autoHide,
    description,
    type,
    message: title,
    hideStatusBar: false,
    animated: false,
  });
};
