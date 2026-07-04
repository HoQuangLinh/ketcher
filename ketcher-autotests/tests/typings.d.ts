import { Ketcher } from '@hoquanglinh/ketcher-core';

declare global {
  interface Window {
    ketcher: Ketcher;
    isPolymerEditorTurnedOn: boolean;
  }
}
