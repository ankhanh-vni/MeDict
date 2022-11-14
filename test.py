import requests

# Define our base URL
BASE = "http://127.0.0.1:5000/"

# data=[{"likes" : 10, "name":"Tim", "views": 100000}, 
#       {"likes" : 50, "name":"Khoi", "views": 20000},
#       {"likes" : 5, "name":"Shaw", "views": 5000}]

# for i in range(len(data)):
#     response = requests.put(BASE + "video/" + str(i), data[i])
#     print(response.json())

# input()
# response = requests.delete(BASE + "video/0")
# print(response)

# input()
# response = requests.get(BASE + "video/1")
print("T------------------esting")
input()
response = requests.get(BASE + "/vigina")
print(response.json())