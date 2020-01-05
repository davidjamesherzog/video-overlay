import overlays from './dist/video-overlay.esm.js';

const player = document.getElementById('player');

overlays(player, {
  debug: true,
  overlays: [
    {
      id: 'paused',
      start: 'pause',
      end: 'play',
      align: 'center'
    },
    {
      id: 'top-left',
      start: 0,
      end: 5,
      align: 'top-left'
    },
    {
      id: 'top-right',
      start: 6,
      end: 10,
      align: 'top-right'
    },
    {
      id: 'bottom-left',
      start: 11,
      end: 15,
      align: 'bottom-left'
    },
    {
      id: 'bottom-right',
      start: 16,
      end: 20,
      align: 'bottom-right'
    }
  ]
});
