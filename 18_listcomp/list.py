'''
Team NotReally -- Maggie Zhao and Kyle Tau
SoftDev2 pd6
K18 -- PPFTLCW
04-15-2019
'''

import math
def pythTrips(n):
    return [(b,a,c) for a in range(1,n) for b in range(1,a) for c in range(a,n) if (a**2+b**2)==c**2]

def quickSort(ary):
    return quickSort(
        [i for i in ary[1:] if i<= ary[0]]) + [ary[0]] + quickSort ([i for i in ary[1:] if i>ary[0]]) if len(ary)>1 else ary




print(pythTrips(100))
print(quickSort([6,3,2,5,4]))
