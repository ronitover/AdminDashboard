from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/book_management')
def book_management():
    return render_template('book_management.html', active='book_management')

@app.route('/user_management')
def user_management():
    return render_template('user_management.html', active='user_management')

if __name__ == '__main__':
    app.run(debug=True)

