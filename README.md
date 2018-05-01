# dexie-opened-databases-addon
An addon for Dexie.js that keeps track of opened connections

[![Build Status](https://www.travis-ci.org/andrehtissot/dexie-opened-databases-addon.svg?branch=master)](https://www.travis-ci.org/andrehtissot/dexie-opened-databases-addon)
[![npm](https://img.shields.io/npm/dt/dexie-opened-databases-addon.svg)](https://www.npmjs.com/package/dexie-opened-databases-addon)
[![npm](https://img.shields.io/npm/v/dexie-opened-databases-addon.svg)](https://www.npmjs.com/package/dexie-opened-databases-addon)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Known Vulnerabilities](https://snyk.io/test/github/andrehtissot/dexie-opened-databases-addon/badge.svg?targetFile=package.json)](https://snyk.io/test/github/andrehtissot/dexie-opened-databases-addon?targetFile=package.json)
[![Maintainability](https://api.codeclimate.com/v1/badges/1257f78f1a31db60f684/maintainability)](https://codeclimate.com/github/andrehtissot/dexie-opened-databases-addon/maintainability)

### How it works

When a new Dexie is instanciated ie `new Dexie(dbName, { addons: [ DexieOpenedDatabasesAddon ] }).open()`, this instance is kept as `Dexie.openedDatabases`, in a Map with the database name as key.

When the connection is closed ie `db.close()`, it's instance is removed from the `Dexie.openedDatabases` Map.
