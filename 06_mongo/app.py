#AlphaSapphire -- Karen Li, Kyle Tau
#SoftDev2 pd6
#K06 -- Yummy Mango Py
#2019-02-28

import json
from pymongo import MongoClient

s = '167.99.4.38'
c = MongoClient(s)
db = c.test
collection = db.restaurants

#borough
def find_borough():
    list = []
    for i in collection.find({"borough":"Queens"}):
        list.append(i)
    return list

#zipcode
def find_zipcode():
    list = []
    for i in collection.find({"address.zipcode":"11001"}):
        list.append(i)
    return list

#zipcode and grade
def find_zipgrade():
    list = []
    for i in collection.find({"address.zipcode":"11001"},
                             {"grades[0].grade":"B"}):
        list.append(i)
    return list

#zipcode and score
def find_zipscore():
    list = []
    for i in collection.find({"address.zipcode":"11001"},
                             {"grades[0].score": { $lt: 20 }}):
        list.append(i)
    return list

print(find_borough())
print(find_zipcode())
print(find_zipgrade())
print(find_zipscore())
