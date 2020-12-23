FROM python:3.7-alpine
COPY requirements.txt /
RUN pip install -r /requirements.txt
COPY . /soundboard
WORKDIR /soundboard
EXPOSE 5000
CMD ["gunicorn", "-b", "0.0.0.0:5000", "-w 5", "wsgi:app"]
