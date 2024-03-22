import { Screen } from 'quasar';

export function adaptiveValue<T>(xs: T, sm: T, md: T, lg: T, xl: T): T {
  if (Screen.xs) return xs;
  if (Screen.sm) return sm;
  if (Screen.md && window.matchMedia('(orientation: landscape)').matches)
    return sm;
  if (Screen.md) return md;
  if (Screen.lg) return lg;
  return xl;
}
