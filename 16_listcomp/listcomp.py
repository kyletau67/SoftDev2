'''Kyle Tau
SoftDev2 pd 6
K16 -- Do You Even List?
2019-04-11'''


UC="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
LC="abcdefghijklmnopqrstuvwxyz"
NUMS="1234567890"
NONALPHA = ".?@&#,;:-_*"
pw="myNoobPass1234"

def validator(p):
    f = [ 1 if x in UC else 2 if x in LC else 3 if x in NUMS else 0 for x in p]
    return (1 in f and 2 in f and 3 in f)

def strength(p):
	s = 0
	f = [ 1 if x in UC else 2 if x in LC else 3 if x in NUMS else 4 if x in NONALPHA else 0 for x in p]
	uc_count = f.count(1)
	lc_count = f.count(2)
	nums_count = f.count(3)
	na_count = f.count(4)
	s += (lc_count / 4)
	s += (uc_count / 3)
	s += (nums_count /2)
	s += na_count
	if (s > 10):
		s = 10
	return s

print(validator(pw))
print(strength("abcd1234ABCD.?&#"))
