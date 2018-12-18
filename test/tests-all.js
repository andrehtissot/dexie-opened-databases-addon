import { asyncTest, deleteAllDatabasesWhenDone, newDatabase } from './helper-functions'
import { module } from 'QUnit'

deleteAllDatabasesWhenDone()

module('Dexie.openedDatabases')

asyncTest('Dexie.openedDatabases holds opened databases objects', async assert => {
    const db = newDatabase()
    assert.ok(Dexie.openedDatabases instanceof Map, 'Dexie.openedDatabases holds a Map')
    assert.equal(Dexie.openedDatabases.size, 0, 'Dexie.openedDatabases holds an empty Map')
    db.version(1).stores({})
    await db.open()
    assert.equal(
        typeof Dexie.openedDatabases.get(db.name),
        'object',
        'Dexie.openedDatabases holds a Map with the db instance'
    )
    Dexie.openedDatabases.get(db.name).close()
})

asyncTest('should not hold closed database connections', async assert => {
    const db = newDatabase()
    db.version(1).stores({})
    await db.open()
    assert.ok(Dexie.openedDatabases.has(db.name), 'opened database should be accessible')
    Dexie.openedDatabases.get(db.name).close()
    assert.notOk(Dexie.openedDatabases.has(db.name), 'closed database should not be accessible')
})
