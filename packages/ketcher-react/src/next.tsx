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

import { type EditorProps, MicromoleculesEditor } from './MicromoleculesEditor';

export type NextEditorProps = Omit<EditorProps, 'ketcherId'> & {
  ketcherId?: string;
};

export const Editor = (props: Readonly<NextEditorProps>) => (
  <MicromoleculesEditor {...(props as EditorProps)} />
);

export { MicromoleculesEditor };
export type { EditorProps } from './MicromoleculesEditor';
export * from './script';
export * from './constants';
export * from './components';
export * from './utils';
export { AppContext } from './contexts';
