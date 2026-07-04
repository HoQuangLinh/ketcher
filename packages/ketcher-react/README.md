# @hoquanglinh/ketcher-react

[![npm version](https://img.shields.io/npm/v/@hoquanglinh/ketcher-react)](https://www.npmjs.com/package/@hoquanglinh/ketcher-react)
[![Downloads](https://img.shields.io/npm/dm/@hoquanglinh/ketcher-react)](https://www.npmjs.com/package/@hoquanglinh/ketcher-react)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

Copyright (c) 2021 [EPAM Systems, Inc.](https://www.epam.com/)

Ketcher is an open-source web-based chemical structure editor incorporating high performance, good portability, light weight, and ability to easily integrate into a custom web-application. Ketcher is designed for chemists, laboratory scientists and technicians who draw structures and reactions.

For more details please look at the following [link](https://github.com/epam/ketcher/blob/master/README.md).

The @hoquanglinh/ketcher-react package contains only the functionality necessary to define components. It is used together with [@hoquanglinh/ketcher-core](https://www.npmjs.com/package/@hoquanglinh/ketcher-core) and optionally with [@hoquanglinh/ketcher-standalone](https://www.npmjs.com/package/@hoquanglinh/ketcher-standalone) if standaolone mode is required.

## Installation

The @hoquanglinh/ketcher-react library is available as an [NPM](https://www.npmjs.com/) package. Install it either with NPM:

```sh
npm install --save @hoquanglinh/ketcher-core @hoquanglinh/ketcher-react
```

or [Yarn](https://yarnpkg.com/):

```sh
yarn add @hoquanglinh/ketcher-react
```

## Usage

```js
import { Editor } from '@hoquanglinh/ketcher-react/next'
import { RemoteStructServiceProvider } from '@hoquanglinh/ketcher-core'
import '@hoquanglinh/ketcher-react/index.css'

const structServiceProvider = new RemoteStructServiceProvider(
  process.env.REACT_APP_API_PATH!,
  {
    'custom header': 'value' // optionally you can add custom headers object 
  }
)

const MyComponent = () => {
  return (
    <Editor
      staticResourcesUrl={process.env.PUBLIC_URL}
      structServiceProvider={structServiceProvider}
    />
  )
}
```

For full macromolecules mode, also install `@hoquanglinh/ketcher-macromolecules`
and import `Editor` from `@hoquanglinh/ketcher-react`.

### Indigo Service

Ketcher uses Indigo Service for server operations.
You may pass it as a property while Editor component is used or just add api_path query parameter:

```sh
<Editor staticResourcesUrl={process.env.PUBLIC_URL} apiPath={link to Indigo service} />
    or
http://localhost:3000/?api_path={link to Indigo service}
```

You can find the instruction for service installation
[here](http://lifescience.opensource.epam.com/indigo/service/index.html).

### 3D Viewer

Ketcher uses Miew-React for viewing and editing data in 3D.
Miew-React package default exports Viewer component which
initializes and renders a Miew instance inside of it

```js
...
import Viewer from 'miew-react'

const MyComponent = () => {
  return <Viewer />
}
...
...
```

You can find the latest version of Miew-React [here](https://github.com/epam/miew/tree/master/packages/miew-react).
The last checked version - [0.12.0](https://www.npmjs.com/package/miew-react).
