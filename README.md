# ledger-case-study-starter

## Loading sqlite

* `db.sqlite3` has already been loaded with policy data.
* Only use the following command if you need to recreate the file (or just `git reset`)
    ```bash
    ./manage.py load_auto_policies --max 20000 ../data/auto_policies.csv
    ```