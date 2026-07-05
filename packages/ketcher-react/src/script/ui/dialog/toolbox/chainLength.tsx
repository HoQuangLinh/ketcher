import { type ChangeEvent, useEffect, useRef, useState } from 'react';

import { Dialog } from 'components';
import styles from './chainLength.module.less';

const MIN_CARBON_ATOMS = 1;
const MAX_CARBON_ATOMS = 999;

interface ChainLengthProps {
  initialCarbonAtoms?: number;
  onCancel: () => void;
  onOk: (result: unknown) => void;
}

function isValidCarbonAtoms(value: string): boolean {
  const carbonAtoms = Number(value);

  return (
    Number.isInteger(carbonAtoms) &&
    carbonAtoms >= MIN_CARBON_ATOMS &&
    carbonAtoms <= MAX_CARBON_ATOMS
  );
}

function ChainLength(props: Readonly<ChainLengthProps>) {
  const { initialCarbonAtoms = 5, ...params } = props;
  const [carbonAtoms, setCarbonAtoms] = useState(String(initialCarbonAtoms));
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    inputRef.current?.select();
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCarbonAtoms(event.target.value);
  };

  return (
    <Dialog
      title="Chain"
      className={styles.chainLength}
      buttons={['Cancel', 'OK']}
      buttonsNameMap={{ OK: 'Add' }}
      primaryButtons={['OK']}
      result={() => Number(carbonAtoms)}
      valid={() => isValidCarbonAtoms(carbonAtoms)}
      params={params}
    >
      <div className={styles.content}>
        <label className={styles.line}>
          <span>Add a chain of</span>
          <input
            ref={inputRef}
            type="number"
            min={MIN_CARBON_ATOMS}
            max={MAX_CARBON_ATOMS}
            step={1}
            value={carbonAtoms}
            onChange={handleChange}
            className={styles.input}
            data-testid="chain-carbon-atoms-input"
          />
          <span>Carbon atoms</span>
        </label>
        <p className={styles.hint}>
          To create another chain of the same length, click in the Document
          window.
        </p>
      </div>
    </Dialog>
  );
}

export default ChainLength;
