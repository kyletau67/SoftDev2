import random

def make_HTML_heading(f):
    #print(f)
    txt = f()
    print(txt)
    def inner():
        nonlocal txt
        #print(txt)
        return '<h1>' + txt + '</h1>'
    return inner


# equiv to greet = makeHTMLheading(greet)
# decorator makes the assignment
@make_HTML_heading
def greet():
    greetings = ['Hello', 'Welcome', 'AYO!', 'Hola', 'Bonjour', 'Word up']
    return random.choice(greetings)

#greet_heading = make_HTML_heading(greet)
#print(greet_heading())
print(greet())

#=============================================================================

def memoize(f):
    # stores function results
    memo = {}
    def helper(x):
        nonlocal memo
        # only calls function if it is not in the memo dict
        if x not in memo:
            memo[x] = f(x)  
        return memo[x]
    return helper

#@closure
def fib(n):
    if n==0:
        return 0
    elif n==1:
        return 1
    else:
        return fib(n-1) + fib(n-2)




fib = memoize(fib)
print(fib(40))
