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

a = {}
a[(1,2)] = 1
a['lel'] = 2
a[1] = 3

print(type(list(a.keys())[2]))