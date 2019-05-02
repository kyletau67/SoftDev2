#Not Really- Kyle Tau & Maggie Zhao
#SoftDev2 pd6
#K22-Closure
#2019-04-30

'''
Classwork:
def inc(x):
    return x + 1

f = inc

print (f(10))

def adder(a, b):
    return a + b

def caller(c):
    print (c(2,4))
    print (c(3,5))

caller(adder)

def outer(x):
    def contains(l):
        return x in l
    return contains
# returns a fxn


contains_15 = outer(15)
print(contains_15([1,2,3,4,5]))

print(contains_15([13,14,15,16,17]))
print(contains_15(range(1,20)))

#del outer
#outer(42)
# check if outer still exists
#print(contains_15(range(14,20)))

def outer():
    x = "foo"
    def inner():
        #creates an x that is local to inner when it is called; disappears when fxn is done
        nonlocal x
        # => bar
        # looks outside the scope of the inner fxn for the x
        x = "bar"
    inner()
    return x

print(outer())
'''

def repeat(word):
    def inner(num):
        return word * num
    return inner


r2 = repeat('goodbye')
r1 = repeat('hello')

print(r1(2)) #hellohello
print(r2(2)) #goodbyegoodbye

print(repeat('cool')(3)) #coolcoolcool

# user can enter any number
# 0 -> get the counter
# #/0 -> increments counter by 1
def make_counter():
    x = 0
    def getter():
        nonlocal x
        print(x)
        return x
    def setter():
        nonlocal x
        x += 1
        print (x)
        return x
    return (setter, getter)

ctr1, acc1 = make_counter()
ctr1()
ctr1()
ctr1()
ctr1()
acc1()
print()

ctr2, acc2 = make_counter()
ctr2()
ctr2()
ctr2()
acc2()
