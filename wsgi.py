from app import app
import os

# This is here to prevent an error from flashing
app.secret_key = os.urandom(24)

if __name__ == "__main__":
    app.run()