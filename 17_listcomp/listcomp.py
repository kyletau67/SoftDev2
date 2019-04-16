#Not Really- Kyle Tau & Maggie Zhao
#SoftDev2 pd6
#K17: PPFTLCW
#2019-04-13

#1 ['00', '22', '44', '66', '88']
l1 = []

for x in range(5):
    l1.append(str(22*x))
print("~~~~~~~~Making ['00', '22', '44', '66', '88']~~~~~~~~")
print("loopy way")
print(l1)
print("list comprehension way")
print([str(22*x )for x in range(5)])



#2 [7, 17, 27, 37, 47]
l2 = []

for x in range(5):
    l2.append(7+10*x)
print("~~~~~~~~Making [7, 17, 27, 37, 47]~~~~~~~~")
print("loopy way")
print(l2)
print("list comprehension way")
print([7+10*x for x in range(5)])


#3 [0, 0, 0, 0, 1, 2, 0, 2, 4]
l3 = []

for x in range(9):
    if (x % 3 == 0):
        l3.append(0)
    elif (x % 3 == 1):
        l3.append(int(x / 3))
    else:
        l3.append(2 * int(x / 3))
print("~~~~~~~~Making [0, 0, 0, 0, 1, 2, 0, 2, 4]~~~~~~~~")
print("loopy way")
print (l3)
print("list comprehension way")
print([0 if x % 3 == 0
       else int(x/3) if x % 3 == 1
       else (2*int(x/3)) for x in range(9)])

#4 Composites on range [0, 100] in ascending order
print("~~~~~~~~Making list of composite numbers~~~~~~~~")
print("loopy way")
def composite():
    composite = []

    for x in range(2,101):
        for num in range (2, x):
            if (x % num == 0 ) and x not in composite:
                composite.append(x)
    print composite
composite()
print("list comprehension way")
print([x for x in range (2, 101) if 0 in [ x % i for i in range (2,x)]])

#5 Primes on range [0, 100] in ascending order
print("~~~~~~~~Making list of prime numbers~~~~~~~~")
print("loopy way")
def prime():
    prime = []

    for x in range(2, 101):
        isPrime = True
        for num in range (2, x):
            #print (str(x) + " % "+ str(num) + " = "+ str(x % num))
            if (x % num == 0):
                isPrime = False
                break
        if isPrime:
            prime.append(x)
    print prime
prime()
print("list comprehension way")
print([x for x in range (2,101) if 0 not in [x % i for i in range (2,x)]])

#6 All divisors of a number, listed in ascending order
def divisor(x):
    l6=[]
    for i in range(x):
        if x % (i+1) == 0:
            l6.append(i+1)
    print(l6)
    return
print("~~~~~~~~Making list of divisors of 24~~~~~~~~")
print("loopy way")
divisor(24)
print("list comprehension way")
def divisor2(i):
    print([ x for x in range(1, i + 1) if i % x == 0])
    return
divisor2(24)

#7 Transpose a matrix (turn rows into columns and vice-versa...)
print("~~~~~~~~Making tranposed matrix~~~~~~~~")
print("original matrix")
matrix = [[1, 2, 3, 4] , [5, 6, 7, 8] , [9, 10, 11, 12]]
for row in matrix:
    print row

print("loopy way")
def transpose(matrix):
    t = [[0 for r in range(len(matrix))] for c in range(len(matrix[0]))]
    for r in range(len(matrix)):
        for c in range(len(matrix[0])):
            t[c][r] = matrix[r][c]
    for row in t:
        print row

transpose(matrix)
print("list comprehension way")
def transpose2(matrix):
    t = [[matrix[r][c] for r in range(len(matrix))] for c in range(len(matrix[0]))]
    for row in t:
        print row
transpose2(matrix)
