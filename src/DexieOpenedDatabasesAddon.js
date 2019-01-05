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
    db.open = Dexie.override(db.open, (open) => {
        return function() {
            Dexie.openedDatabases.set(db.name, db)
            return open.apply(this, arguments)
        }
    })
    db.close = Dexie.override(db.close, (close) => {
        return function() {
            Dexie.openedDatabases.delete(db.name)
            return close.apply(this, arguments)
        }
    })
}

if (Dexie.openedDatabases === undefined) {
    Dexie.openedDatabases = new Map()
}

// Dexie.addons.push(DexieOpenedDatabasesAddon)
