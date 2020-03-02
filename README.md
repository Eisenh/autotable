# Quasar App (autotable)

Uses easytable extensions to generate data table and forms from json.  Uses firebase2json to

A Quasar Framework app

## Install the dependencies

```bash
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### Lint the files

```bash
npm run lint
```

### Build the app for production

```bash
quasar build
```

### Customize the configuration

See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).

```javascript
          { src: 'statics/icons/icon-128x128.png', sizes: '128x128', type: 'image/png' },
          { src: 'statics/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: 'statics/icons/icon-256x256.png', sizes: '256x256', type: 'image/png' },
          { src: 'statics/icons/icon-384x384.png', sizes: '384x384', type: 'image/png' },
          { src: 'statics/icons/icon-512x512.png', sizes: '512x512', type: 'image/png' }
```

## Changelog

1) added extensions to allow use of "EasyTable />"
  $ quasar ext add @quasar/icon-genie
  $ quasar ext add easy-tables
  $ quasar ext add easy-forms # peer dependency
2) $ npm i --save vuex-easy-firestore firebase
3) add firebase config to /boot/firebase.js
4) added vuexeasyfirestore to store/index.js and a module for users and for data
