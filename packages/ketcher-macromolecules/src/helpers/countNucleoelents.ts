import { Entities, Nucleotide, Nucleoside } from '@hoquanglinh/ketcher-core';

export const getCountOfNucleoelements = <T extends { [key: string]: unknown }>(
  selections: T[],
): number =>
  selections.filter((selection) => {
    if (selection.type) {
      return (
        selection.type === Entities.Nucleotide ||
        selection.type === Entities.Nucleoside
      );
    } else if (selection.node) {
      return (
        selection.node instanceof Nucleotide ||
        selection.node instanceof Nucleoside
      );
    }
    return false;
  }).length;
