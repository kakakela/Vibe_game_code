import Phaser from 'phaser';
import { GAME_WIDTH, GAME_HEIGHT } from './data/constants';
import { HelloScene } from './scenes/HelloScene';

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: 'game',
  width: GAME_WIDTH,
  height: GAME_HEIGHT,
  backgroundColor: '#0a0a0a',
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: [HelloScene],
};

new Phaser.Game(config);
