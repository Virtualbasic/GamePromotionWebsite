from crypt import methods
from flask import Flask, render_template, request
import smtplib

from symbol import subscript

app = Flask(__name__)

subscribes = []

@app.route('/')
def index():
    title = "KURWA TERAZ DZIAŁA I CHUJ"
    return render_template("index.html", title=title)

@app.route('/about')
def about():
    title = "rozmiesz działa kurwa i chuj"
    names = ["John", "seba", "Mieczochlast"]
    return render_template("about.html", names = names, title = title)

@app.route('/subscribe')
def subscribe():
    title = "Subscribe me lel "
    return render_template("subscribe.html" title = title)
@app.route('/from', methods=[POST])
def form():
    first_name = request.form.get("first_name")
    last_name = request.form.get("last_name")
    
 