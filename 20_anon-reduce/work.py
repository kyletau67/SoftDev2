'''
Team NotReally -- Maggie Zhao and Kyle Tau
SoftDev2 pd6
K20 - Reductio ad Absurdum
04-18-2019
'''

from functools import reduce

# String of punctuation & special characters
punct = """'".?@&#,;:-_*!()[]{}~"""

# open text (need to figure out ANSI escape sequences)
text = open('solitude.txt', 'r').read()
# split on spaces
text = text.split()
# remove everything before the preface and after the end of the story
text = text [ text.index("PREFACE.")+ 1 : text.index("END.")-1]

# Sample text
# open text
test = open("sample.txt", "r").read()
# split on spaces
test = test.split()


print("""
**========= Solitude =========** \n
    by Johann Georg Zimmerman \n
**============================** """)

# removes any punctuation/special characters from the word
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

# strip each word of punctuation
text = [punctremove(x) for x in text]
test = [punctremove(x) for x in test]


# find the frequency of a single word
def freq(word, smp):
    #print([1 if z == word else 0 for z in text])
    count = reduce((lambda x,y:x+y),
                    [1 if z == word else 0 for z in smp])
    #print(count)
    return count

print("The word 'solitude' appears " + str(freq('solitude', text)) + " times in the text.")
print("The word 'mangoes' appears " + str(freq('mangoes', text)) + " times in the text.")


# find the total frequency of a group of words
def group(string, smp):
    # takes input string and splits & strips it
    parse = [punctremove(x) for x in string.split()]
    #print(parse)
    length = len(parse)
    #print(length)
    count = reduce((lambda x, y : x + y),
                    # goes through the text, n words at a time, to see if it matches the list of input words
                    [1 if parse == smp[z:z + length]
                     else 0 for z in range(len(smp)-length)])
    return count

print("The phrase 'it is' appears " + str(group("it is", text)) + " times in the text.")
print("The phrase 'hakuna matata' appears " + str(group("hakuna matata", text)) + " times in the text.")

# find the most frequently occurring word
def max_freq(smp):
    #print(text)
    # makes a list of unique words
    words = []
    for word in smp:
        if word not in words:
            words.append(word)

    # find the frequency of each unique word
    freqs = [freq(word, smp) for word in words]

    # find the index of the highest frequency
    max_freq = max(freqs)
    max_ind = freqs.index(max_freq)

    # match the index to the word in the list of unique words. this is the word that appears most frequently
    string = words[max_ind]

    #print(string)
    return string

print("The most frequently occuring word is " + max_freq(text) + ".")
