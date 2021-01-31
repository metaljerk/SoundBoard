A project to play sounds


Check it out! https://soundsboard.herokuapp.com/

To run locally: 

.. code-block:: bash

cd / soundboard 
docker-compose up -d 

or

.. code-block:: bash

pip install -r requirements.txt
gunicorn soundboard.wsgi
