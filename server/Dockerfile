# Use the official Python image as a base image
FROM python:3.11-slim

# Set the working directory
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y && pip install --upgrade pip

# Install system dependencies for PostgreSQL
RUN apt-get install -y libpq-dev
# RUN pip install --no-cache-dir --upgrade pip && pip install --no-cache-dir psycopg2-binary
# Install Python dependencies
COPY /dependencies/requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

# Copy the Django project files
COPY . /app/

# Expose the port Django will run on
EXPOSE 8080
RUN apt-get install -y netcat-openbsd
CMD ["sh", "-c", "until nc -z postgres 5432; do sleep 1; done && python manage.py migrate && python manage.py runserver 0.0.0.0:8080"]
