import createCache, { EmotionCache } from '@emotion/cache';

const isBrowser = typeof document !== 'undefined';

export const createEmotionCache = (): EmotionCache => {
  let insertionPoint;

  if (isBrowser) {
    const emotionInsertionPoint = document.querySelector(
      'meta[name="emotion-insertion-point"]'
    );
    insertionPoint = emotionInsertionPoint ?? undefined;
  }

  return createCache({
    key: 'mui-style',
    insertionPoint: insertionPoint as HTMLElement,
    prepend: true
  });
};
