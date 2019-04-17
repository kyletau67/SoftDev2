from functools import reduce
text = open('sample.txt', 'r').read()
text =text.split()
punct = """'".?@&#,;:-_*!()[]{}~"""

#print(text)

def punctremove(x):
    if x[0] in punct:
        x = x[1:]
    if x[len(x)-1] in punct:
        x = x[:-1]
    return x

text = [punctremove(x) for x in text]

print(text)

def freq(word):
    count = reduce((lambda y:y),[1 if
                                z == word else 0 for z in text])
    return count

print(freq('shades'))
