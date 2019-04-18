from functools import reduce
text = open('solitude.txt', 'r').read()
text =text.split()
text = text [ text.index("PREFACE.") : text.index("END.")-1]
punct = """'".?@&#,;:-_*!()[]{}~"""

test = open("sample.txt", "r").read()
test = test.split()
#print(text)

def punctremove(x):
    if len(x) == 0:
        return ""
    if x[0] in punct:
        x = x[1:]
        x = punctremove(x)
    if x[len(x)-1] in punct:
        x = x[:-1]
        x = punctremove(x)

    return x.lower()

text = [punctremove(x) for x in text]
test = [punctremove(x) for x in test]

#print(text)

def freq(word):
    #print([1 if z == word else 0 for z in text])
    count = reduce((lambda x,y:x+y),[1 if
                                z == word else 0 for z in text])
    #print(count)
    return count

print(freq('the'))

def group(string):
    parse = [punctremove(x) for x in string.split()]
    #print(parse)
    length = len(parse)
    #print(length)
    count = reduce((lambda x, y : x + y), [1 if parse == text[z:z + length]
                   else 0 for z in range(len(text)-length)])
    return count

#print(group("it is"))

def max_freq():
    #print(text)
    words = []
    for word in text:
        if word not in words:
            words.append(word)
    print(words)
    freqs = [freq(word) for word in text]
    print(freqs)
    max_freq = max(freqs)
    print(max_freq)
    max_ind = freqs.index(max_freq)
    print(max_ind)
    string = text[max_ind]
    print(string)
    return string
print(max_freq())
    
