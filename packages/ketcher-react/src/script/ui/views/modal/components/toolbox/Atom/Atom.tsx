/****************************************************************************
 * Copyright 2021 EPAM Systems
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 ***************************************************************************/

import type { BaseCallProps, BaseProps } from '../../../modal.types';

import Form, { Field } from '../../../../../component/form/form/form';
import { type FC, useMemo } from 'react';

import { Dialog } from '../../../../components';
import { SettingsManager } from '@hoquanglinh/ketcher-core';
import { atom as atomSchema } from '../../../../../data/schema/struct-schema';
import classes from './Atom.module.less';
import {
  AtomListValid,
  atomValid,
  chargeValid,
  pseudoAtomValid,
} from './helper';

interface AtomProps extends BaseCallProps, BaseProps {
  alias: string;
  charge: string;
  exactChangeFlag: boolean;
  explicitValence: number;
  hCount: number;
  invRet: number;
  isotope: number;
  label: string;
  radical: number;
  ringBondCount: number;
  stereoParity: number;
  substitutionCount: number;
  unsaturatedAtom: boolean;
  customQuery: string;
}

type Props = AtomProps & {
  isMultipleAtoms?: boolean;
  isRestoredModal: boolean;
  isMonomerCreationWizardActive?: boolean;
};

const Atom: FC<Props> = (props: Props) => {
  const {
    formState,
    /* eslint-disable @typescript-eslint/no-unused-vars */
    stereoParity,
    /* eslint-enable @typescript-eslint/no-unused-vars */
    isMultipleAtoms = false,
    isRestoredModal,
    ...rest
  } = props;

  const customValid = useMemo(() => {
    const atomType = formState.result.atomType;
    const disableQueryElements =
      SettingsManager.getOptions().disableQueryElements;
    return {
      label: (label: string) =>
        atomValid(label, isMultipleAtoms, atomType, false),
      pseudo: (value: string) =>
        pseudoAtomValid(value, atomType, false, disableQueryElements),
      atomList: (value: string) => AtomListValid(value, atomType, false),
      charge: (charge) => chargeValid(charge, isMultipleAtoms, false) ?? false,
    };
  }, [formState.result.atomType, isMultipleAtoms]);
  const alias = formState.result.alias ?? '';
  const isAliasValid = typeof alias === 'string' && alias.trim() === alias;

  return (
    <Dialog
      title="Atom Properties"
      className={classes.atomProps}
      result={() => formState.result}
      valid={() => isAliasValid}
      params={rest}
      buttonsNameMap={{ OK: 'Apply' }}
      buttons={['Cancel', 'OK']}
      withDivider
      focusable={false}
    >
      <Form
        schema={atomSchema}
        customValid={customValid}
        init={isRestoredModal ? null : rest}
        {...formState}
      >
        <div className={classes.accordionWrapper}>
          <div
            className={classes.accordionDetails}
            data-testid="General-wrapper"
          >
            <Field name="alias" data-testid="alias" isFocused />
          </div>
        </div>
      </Form>
    </Dialog>
  );
};

export type { AtomProps };
export default Atom;
