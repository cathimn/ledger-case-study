# ledger-case-study-starter

A minimal Django REST Framework based API server for returning auto policy data. This starter is _not_ meant to be
production ready and may ignore best practices for the sake of brevity.

## Initial Setup & Running

```bash
cd ledger-case-study-starter

# Create venv & install dependencies
python3 -m venv env
source env/bin/activate
pip install -r requirements.txt

./manage.py runserver

# Django should now be running at http://localhost:8000
```

## Notes

* Depending on how you access the API from your client app, you might need to install middleware to handle CORs. I
  recommend using [`django-cors-headers`](https://pypi.org/project/django-cors-headers/), however, feel free to use what
  you are comfortable with.

## Rules

* Keep in mind that this is only a guide to get started prototyping quickly. Please feel free to refactor and/or move
  things around as you find appropriate
* Feel free to use any libraries that you find useful
* Do not be concerned with CSRF or authentication

## Endpoints

* http://localhost:8000/api/policies/
* http://localhost:8000/api/policies/?format=json
* Sample output
  ```json 
      {
          "count": 20000,
          "next": "http://localhost:8000/api/v1/policies/?limit=100&offset=100",
          "previous": null,
          "results": [
              {
                  "id": "79bce078-7756-4ddf-b4a2-563754bf0084",
                  "year": 2010,
                  "month": 11,
                  "driver_age": 27,
                  "driver_gender": "male",
                  "driver_employment": "employed",
                  "driver_marital": "married",
                  "driver_location": "urban",
                  "vehicle_age": 2,
                  "vehicle_model": "sedan",
                  "insurance_premium": 639.1281354986618,
                  "insurance_claims": 0,
                  "insurance_losses": 0.0
              }
          ]
      }
  ```

## Loading sqlite

* `db.sqlite3` has already been loaded with policy data.
* Only use the following command if you need to recreate the file (or just `git reset`)
    ```bash
    ./manage.py load_auto_policies --max 20000 ../data/auto_policies.csv
    ```