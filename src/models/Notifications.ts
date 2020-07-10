import {GameType} from './GameType';

export interface Notification {
  gameType: GameType
  when: string
  where: string
  message?: string
}

export function createNotification(gameType: GameType, when: string, where?: string, message?: string): Notification {
  return {
    where: 'UTM',
    message: message,
    gameType,
    when,
  }
}
