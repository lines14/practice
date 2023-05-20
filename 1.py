# array = [4, 8, 15, 16, 23, 42]
# array_1 = [y for y in array if y<23]
# print(array_1)

# def repeat(text, count):
#     return text*count
# print(repeat('a', 4))

# class Animal: 
#     def __init__(self):
#         self.name = 'animal'
#         print(self.name) 

# class Rabbit(Animal):
#     def __init__(self):
#         super().__init__()
#         self.name = 'rabbit'
#         print(self.name) 

# # Animal()
# Rabbit()
# index = 0
# a = [1,2,3,4,5]
# for i in a:
#     print(index)
#     index+=1

# a = {}
# a[(1,2)] = 1
# a['lel'] = 2
# a[1] = 3

# print(type(list(a.keys())[2]))

# if True:
#     test = True
# print(test)

# def func1():
#     count = 0
#     def inner():
#         nonlocal count
#         count+=1
#     inner()
#     return count

# print(func1())
# print(func1())
# print(func1())

# def to_upper(x):
#     def unpacking_arg_func():
#         return x().upper()
#     return unpacking_arg_func

# @to_upper
# def modify_str():
#     return 'kek'

# print(modify_str())

# def to_upper(x):
#     def unpacking_arg_func(y):
#         return x(y).upper()
#     return unpacking_arg_func

# @to_upper
# def modify_str(y):
#     return y

# print(modify_str('hello'))

# def sayHiBye(firstName, lastName):
#     def getFullName():
#         return 'Hello' + " " + firstName + " " + lastName
#     return getFullName()
#     # print("Hello, " + getFullName())
#     # print("Bye, " + getFullName())

# print(sayHiBye('kek', 'kok'))

# def sayHiBye(firstName, lastName):
#     def getFullName():
#         return 'Hello' + " " + firstName + " " + lastName
#     kek = getFullName()
#     return kek

# print(sayHiBye('kek', 'kok'))

# def counter():
#     number = 1
#     def getCount():
#         return number+1
#     return getCount()

# kek = counter()

# print(kek)
# print(kek)
# print(kek)

# def upper_letters(arg_func):
#     def unpacking_arg_func():
#         return arg_func().upper()
#     return unpacking_arg_func

# @upper_letters
# def example():
#     return 'Hello'
    
# print(example())

# def upper_letters(arg_func):
#     return lambda: arg_func().upper()
# @upper_letters
# def example():
#     return 'kek'  
# print(example())

point = ({'name': 1}, {'name': 2})
# point[0] = {'name': 3}
point[0]['name'] = 3
print(point)