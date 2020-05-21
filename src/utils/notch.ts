const width = window.screen.width;
const height = window.screen.height;
const pixelRatio = window.devicePixelRatio;
const pwaMode = height - document.documentElement.clientHeight < 50;

export const hasNotch =
  pwaMode && // iPhone XR
  ((width === 414 && height === 896 && pixelRatio === 2) ||
    // iPhone X/XS
    (width === 375 && height === 812 && pixelRatio === 3) ||
    // iPhone XS Max
    (width === 414 && height === 896 && pixelRatio === 3));

export const notchHeight = hasNotch ? 2 : 0; //rem
