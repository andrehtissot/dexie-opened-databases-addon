/*!
 * Dexie Opened Databases Addon {version} ({date})
 * An addon for Dexie.js that keeps track of opened connections
 * https://github.com/andrehtissot/dexie-opened-databases-addon
 *
 * Requires Dexie IndexedDB Addon
 * http://dexie.org
 *
 * Copyright André Augusto Tissot
 * Released under the MIT license
 */

export default function DexieOpenedDatabasesAddon(db) {
  if(Dexie.openedDatabases === undefined) {
    Dexie.openedDatabases = new Map()
  }
  Dexie.openedDatabases.set(db.name, db)

  db.close = Dexie.override(db.close, (close) => {
    return () => {
      Dexie.openedDatabases.delete(db.name)
      return close.apply(this, arguments);
    }
  })
}

// Dexie.addons.push(DexieOpenedDatabasesAddon)
