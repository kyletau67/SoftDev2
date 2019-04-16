# Team Kaile
# SoftDev2 pd 6
# HW19 --
# 2019-04-16

L1 = [1,2,3,4]
L2 = [3,4,5,6,7,8]
myList = [1,2,3]
myList2 = ["hi", 'ho', 'he']

#Write a union to unionize A and B
def unionize(a,b):
    #a.append(b)
    L = [x for x in a if (x not in b)] + [x for x in b]
    return L


#Write intersect for A and B
def inter(a,b):
    return [x for x in a if x in b]


#Write set difference for A and B
def set_diff(a,b):
    return [x for x in a if (x not in b)]


#Write symmetric difference for A and B
def sym_diff(a,b):
    return set_diff(a,b) + set_diff(b,a)


#Write cartesian product for A and B
def cartesian(a,b):
    return [(x,y) for x in a for y in b]


#Test Cases:
print(unionize(L1,L2)) #[1,2,3,4,5,6,7,8]
print(inter(L1,L2))    #[3,4]
print(set_diff(L1,L2)) #[1,2]
print(sym_diff(L1,L2)) #[1,2,5,6,7,8]
print(cartesian(myList,myList2)) #[(1, 'hi'), (1, 'ho'), (1, 'he'), (2, 'hi'), (2, 'ho'), (2, 'he'), (3, 'hi'), (3, 'ho'), (3, 'he')]
