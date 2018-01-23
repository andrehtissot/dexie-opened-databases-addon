import DexieOpenedDatabasesAddon from '../src/DexieOpenedDatabasesAddon'
import {test, done} from 'QUnit'

export function asyncTest(testDescription, testFunction, options = { autoDone: true }) {
    test(testDescription, ( assert ) => {
        var asyncDone = assert.async()
        testFunction(assert, asyncDone).then(() => {
            if(options.autoDone === true) {
                asyncDone()
            }
        }).catch((e) => {
            if(options.autoDone === true || options.autoDone === 'on failure') {
                asyncDone()
            }
            assert.notOk(e.message)
            e.testDescription = testDescription
            throw e
        })
    })
}

var testDatabaseNameIteration = 0
export function newTestDatabaseName() {
    testDatabaseNameIteration++
    return 'testDB'+testDatabaseNameIteration
}

export function newDatabase(options = {}) {
    let dbName = options.dbName
    if(dbName === undefined) {
        dbName = newTestDatabaseName()
    }
    return new Dexie(dbName, { addons: [ DexieOpenedDatabasesAddon ] })
}

export async function deleteAllDatabases() {
    const databasesName = await Dexie.getDatabaseNames()
    for(let datanaseName of databasesName) {
        if(Dexie.openedDatabases.has(datanaseName)) {
            Dexie.openedDatabases.get(datanaseName).close()
        }
    }
    for(let datanaseName of databasesName) {
        Dexie.delete(datanaseName)
    }
    testDatabaseNameIteration = 0
}

var shouldDeleteAllDatabasesWhenDone = false
export function deleteAllDatabasesWhenDone() {
    shouldDeleteAllDatabasesWhenDone = true
}

var shouldDeleteAllDatabasesWhenDoneCanceled = false
export function cancelDeleteAllDatabasesWhenDone(){
    shouldDeleteAllDatabasesWhenDoneCanceled = true
}

done(() => {
    if(!shouldDeleteAllDatabasesWhenDoneCanceled && shouldDeleteAllDatabasesWhenDone){
        deleteAllDatabases()
    }
})
