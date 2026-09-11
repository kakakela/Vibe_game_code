import Phaser from 'phaser';
import { GAME_WIDTH, GAME_HEIGHT, SCENE_KEYS } from '../data/constants';

export class HelloScene extends Phaser.Scene {
  constructor() {
    super({ key: SCENE_KEYS.HELLO });
  }

  create(): void {
    this.cameras.main.setBackgroundColor('#0a0a0a');

    this.add
      .text(GAME_WIDTH / 2, GAME_HEIGHT / 2, 'Hello Dungeon', {
        fontFamily: 'monospace',
        fontSize: '48px',
        color: '#e0e0e0',
      })
      .setOrigin(0.5);
  }
}
