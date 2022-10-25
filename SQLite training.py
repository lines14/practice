import sqlite3 as sq

with sq.connect("saper.db") as con:
    cur = con.cursor()

    # cur.execute("DROP TABLE IF EXISTS users")
    # cur.execute("""CREATE TABLE IF NOT EXISTS users (
    #     name TEXT NOT NULL,
    #     sex INTEGER NOT NULL DEFAULT 1,
    #     old INTEGER,
    #     score INTEGER
    #     )""")

    cur.execute("SELECT * FROM users WHERE score > 100 ORDER BY score DESC LIMIT 5")
    # for result in cur:
    #     print(result)

    result = cur.fetchone()
    result2 = cur.fetchmany(2)
    print(result)
    print(result2)