import random

def make_HTML_heading(f):
    txt = f()
    def inner():
        print(txt)
        return '<h1>'+txt+'</h1>'
    return inner

#equiv to greet_heading = make_HTML_heading(greet)
@make_HTML_heading
def greet():
    greetings = ['Hello','Welcome','AYO!','Hola','Bonjour','Word up']
    return random.choice(greetings)

#greet_heading = make_HTML_heading(greet)
#print(greet_heading())
print(greet())