'''def inc(x):
    return x + 1

f=inc

print(f(10))
print(f)
print(inc)


def adder(a,b):
    return a + b

def caller(c):
    print(c(2,4))
    print(c(3,5))

caller(adder)


def outer(x):
    def contains(l):
        return x in l
    return contains

contains_15 = outer(15)
print(contains_15([1,2,3,4,5]))
print(contains_15([13,14,15,16,17]))
print(contains_15(range(1,20)))


del(outer)
outer(42)

print(contains_15(range(14,20)))

def outer():
    x = "foo"
    def inner():
        nonlocal x
        x = "bar"
    inner()
    return x

print(outer())'''


def make_counter():
    x = 0
    def inner():
        nonlocal x
        x += 1
        return x
    return inner

ctr1 = make_counter()
ctr1()
print(ctr1())
print(ctr1())
