l1 = []

for x in range(5):
    l1.append(22*x)
print(l1)
print([22*x for x in range(5)])




l2 = []

for x in range(5):
    l2.append(7+10*x)
print(l2)
print([7+10*x for x in range(5)])


l3 = []

for x in range(9):
    if (x % 3 == 0):
        l3.append(0)
    elif (x % 3 == 1):
        l3.append(int(x / 3))
    else:
        l3.append(2 * int(x / 3))
print (l3)

print([0 if x % 3 == 0
       else int(x/3) if x % 3 == 1
       else (2*int(x/3)) for x in range(9)])


def divisor(x):
    l6=[]
    for i in range(x):
        if x % (i+1) == 0:
            l6.append(i+1)
    print(l6)
    
divisor(15)

def divisor2(x):
    l6=[]
    print([i+1 if x%(i+1)==0 for i in range(x)])
divisor2(15)
