from flask import Flask, render_template, url_for
import folium
from folium.plugins import MarkerCluster
import pandas as pd
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import pymongo
from pymongo import MongoClient

app = Flask(__name__)
@app.route('/')
def index():
    return render_template('index.html')


if __name__ == "__main__":
    app.run(debug=True)

cluster = MongoClient("mongodb+srv://Zelja:317329232jJ@backenddatabase.cxfv0qt.mongodb.net/?retryWrites=true&w=majority")
db= cluster["AutomehanicarskiPodaci"]
collection = db["AutomehanicarskiPodaci"]
post = {"_id" : 0, "ime" : "AutoSaric", "Adresa": "Jurjevska 26"}

collection.insert_one([post])

# Trying to create a map centered to Pula - Folium

# Define coordinates of where we want to center our map
pula = [44.86833, 13.84806]

# Create the map
my_map = folium.Map(location=pula, zoom_start=13)

# Display the map
my_map


client = pymongo.MongoClient()

mydb = client["auto"]

mycol = mydb["autodata"]

data = {'ime' : 'AutoSaric', 'lokacija' : "Jurjevska 26"}