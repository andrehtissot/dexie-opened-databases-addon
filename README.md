# dexie-opened-databases-addon
An addon for Dexie.js that keeps track of opened connections

[![Build Status](https://www.travis-ci.org/andrehtissot/dexie-opened-databases-addon.svg?branch=master)](https://www.travis-ci.org/andrehtissot/dexie-opened-databases-addon)
[![npm downloads](https://img.shields.io/npm/dt/dexie-opened-databases-addon.svg)](https://www.npmjs.com/package/dexie-opened-databases-addon)
[![npm version](https://img.shields.io/npm/v/dexie-opened-databases-addon.svg)](https://www.npmjs.com/package/dexie-opened-databases-addon)
[![node version](https://img.shields.io/node/v/dexie-opened-databases-addon.svg)](https://www.npmjs.com/package/dexie-opened-databases-addon)
[![GitHub license](https://img.shields.io/github/license/andrehtissot/dexie-opened-databases-addon.svg)](https://github.com/andrehtissot/dexie-opened-databases-addon/blob/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/andrehtissot/dexie-opened-databases-addon.svg)](https://github.com/andrehtissot/dexie-opened-databases-addon/issues)
[![Known Vulnerabilities](https://snyk.io/test/github/andrehtissot/dexie-opened-databases-addon/badge.svg?targetFile=package.json)](https://snyk.io/test/github/andrehtissot/dexie-opened-databases-addon?targetFile=package.json)
[![Dependency Status](https://img.shields.io/david/andrehtissot/dexie-opened-databases-addon.svg)](https://david-dm.org/andrehtissot/dexie-opened-databases-addon)
[![DevDependency Status](https://img.shields.io/david/dev/andrehtissot/dexie-opened-databases-addon.svg)](https://david-dm.org/andrehtissot/dexie-opened-databases-addon?type=dev)
[![Maintainability](https://api.codeclimate.com/v1/badges/1257f78f1a31db60f684/maintainability)](https://codeclimate.com/github/andrehtissot/dexie-opened-databases-addon/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/1257f78f1a31db60f684/test_coverage)](https://codeclimate.com/github/andrehtissot/dexie-opened-databases-addon/test_coverage)
[![Codacy Score](https://api.codacy.com/project/badge/Grade/dafc9b24e8854347ba2cd0ab7cbf9b3b)](https://app.codacy.com/app/andrehtissot/dexie-opened-databases-addon?utm_source=github.com&utm_medium=referral&utm_content=andrehtissot/dexie-opened-databases-addon&utm_campaign=Badge_Grade_Dashboard)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![minified size](https://img.shields.io/bundlephobia/min/dexie-opened-databases-addon.svg)](https://www.npmjs.com/package/dexie-opened-databases-addon)
[![minzipped size](https://img.shields.io/bundlephobia/minzip/dexie-opened-databases-addon.svg)](https://www.npmjs.com/package/dexie-opened-databases-addon)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/andrehtissot/dexie-opened-databases-addon.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/andrehtissot/dexie-opened-databases-addon/context:javascript)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/andrehtissot/dexie-opened-databases-addon.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/andrehtissot/dexie-opened-databases-addon/alerts/)

### How it works

When a new Dexie is instanciated ie `new Dexie(dbName, { addons: [ DexieOpenedDatabasesAddon ] }).open()`, this instance is kept as `Dexie.openedDatabases`, in a Map with the database name as key.

When the connection is closed ie `db.close()`, it's instance is removed from the `Dexie.openedDatabases` Map.
