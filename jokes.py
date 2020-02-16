from flask import Flask, render_template, flash, request, redirect, jsonify, url_for, send_from_directory
import json
import os

app = Flask(__name__)
APP_ROOT = os.path.dirname(os.path.abspath(__file__))
APP_STATIC = os.path.join(APP_ROOT, 'static')

@app.route('/', methods=['GET', 'POST'])
def upload_file():
    return render_template('index.html')

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=2323)