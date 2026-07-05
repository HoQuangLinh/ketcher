import type { LayoutMode } from './types';
import type { BaseMode } from './BaseMode';

type ModeConstructor = new (previousMode?: LayoutMode) => BaseMode;

const modesMap: Partial<Record<LayoutMode, ModeConstructor>> = {};

export function registerMode(mode: LayoutMode, ctor: ModeConstructor) {
  const registeredCtor = modesMap[mode];

  if (
    registeredCtor &&
    registeredCtor !== ctor &&
    process.env.NODE_ENV !== 'development'
  ) {
    throw new Error(`Mode "${mode}" is already registered`);
  }
  if (registeredCtor === ctor) {
    return;
  }
  modesMap[mode] = ctor;
}

export function getModeConstructor(mode: LayoutMode): ModeConstructor {
  const ctor = modesMap[mode];
  if (!ctor) {
    throw new Error(`Mode "${mode}" is not registered`);
  }
  return ctor;
}
