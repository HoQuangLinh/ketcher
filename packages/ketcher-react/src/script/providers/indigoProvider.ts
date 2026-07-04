import type { StructService } from '@hoquanglinh/ketcher-core';

let indigo;
export class IndigoProvider {
  static getIndigo(): StructService {
    return indigo;
  }

  static setIndigo(newIndigo: StructService) {
    indigo = newIndigo;
  }
}
