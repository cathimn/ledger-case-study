# ledger-case-study-starter

A minimal Django REST Framework based API server for returning auto policy data. It provides basic functionality such as
CRUD, filtering, and pagination. This starter is _not_ meant to be production ready and may ignore best practices for
the sake of brevity.

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

* Feel free to add/modify/refactor this project in any way to help your frontend client
* You may use any libraries that you are comfortable with or find useful
* Depending on how you access the API from your client app, you might need to install middleware to handle CORs. I
  recommend using [`django-cors-headers`](https://pypi.org/project/django-cors-headers/).
* Do not be concerned with CSRF or authentication

## Endpoints

* [`api/policies/`](http://localhost:8000/api/policies/) provides the DRF browsable interface
* [`api/policies/?format=json`](http://localhost:8000/api/policies/?format=json) returns the raw Json response
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
    * [`/api/policies/?driver_gender=female&driver_employment=retired`](http://localhost:8000/api/policies/?driver_gender=female&driver_employment=retired) returns policies with a
      retired female driver

## Loading sqlite

* `db.sqlite3` has already been loaded with policy data.
* Only use the following command if you need to recreate the file (or just `git reset`)
    ```bash
    ./manage.py load_auto_policies --max 20000 ../data/auto_policies.csv
    ```