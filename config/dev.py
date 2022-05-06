from .base import *


# General configuration
DEBUG = True

SECRET_KEY = 'some_local_secret_key'


SECURE_SSL_REDIRECT = False

# DB Configuration
USE_PROD_DATABASE = os.getenv("USE_PROD_DATABASE")  # yes: 1, no: 0
USE_PROD_DATABASE = 0 if USE_PROD_DATABASE is None else int(USE_PROD_DATABASE)

if not USE_PROD_DATABASE:
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': BASE_DIR / 'db.sqlite3',
        }
    }
