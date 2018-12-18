/*global DexieOpenedDatabasesAddon*/
import { test, done } from 'QUnit'

export const asyncTest = (testDescription, testFunction, options = { autoDone: true }) => {
    test(testDescription, (assert) => {
        var asyncDone = assert.async()
        testFunction(assert, asyncDone)
            .then(() => {
                if (options.autoDone === true) {
                    asyncDone()
                }
            })
            .catch((e) => {
                if (options.autoDone === true || options.autoDone === 'on failure') {
                    asyncDone()
                }
                assert.notOk(e.message)
                e.testDescription = testDescription
                throw e
            })
    })
}

var testDatabaseNameIteration = 0
export const newTestDatabaseName = () => {
    testDatabaseNameIteration++
    return 'testDB' + testDatabaseNameIteration
}

export const newDatabase = (options = {}) => {
    let dbName = options.dbName
    if (dbName === undefined) {
        dbName = newTestDatabaseName()
    }
    return new Dexie(dbName, { addons: [DexieOpenedDatabasesAddon] })
}

export const deleteAllDatabases = async () => {
    const databasesName = await Dexie.getDatabaseNames()
    for (let datanaseName of databasesName) {
        if (Dexie.openedDatabases.has(datanaseName)) {
            Dexie.openedDatabases.get(datanaseName).close()
        }
    }
    for (let datanaseName of databasesName) {
        Dexie.delete(datanaseName)
    }
    testDatabaseNameIteration = 0
}

var shouldDeleteAllDatabasesWhenDone = false
export const deleteAllDatabasesWhenDone = () => {
    shouldDeleteAllDatabasesWhenDone = true
}

var shouldDeleteAllDatabasesWhenDoneCanceled = false
export const cancelDeleteAllDatabasesWhenDone = () => {
    shouldDeleteAllDatabasesWhenDoneCanceled = true
}

done(() => {
    if (!shouldDeleteAllDatabasesWhenDoneCanceled && shouldDeleteAllDatabasesWhenDone) {
        deleteAllDatabases()
    }
})
