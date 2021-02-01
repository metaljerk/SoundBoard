from app import app
from whitenoise import WhiteNoise
import os


# This is here to prevent an error from flashing
app.secret_key = os.urandom(24)

if __name__ == "__main__":
    app.wsgi_app = WhiteNoise(app.wsgi_app, root='static/')