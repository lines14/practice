class Cat:

    def cat_eats(kitty):
        print(kitty)

cat_1 = Cat

cat_1.cat_eats('Корм')

print(id(Cat()))

print('------------------------------------------------------------')

class Cat:

    def __init__(kitty, food):
        kitty.food = food

    def cat_eats(kitty):
        print(kitty.food)

cat_1 = Cat('Корм')

cat_1.cat_eats()

print(id(Cat('Корм')))

print('------------------------------------------------------------')

class Cat:

    food = 'Корм'

cat_1 = Cat

print(cat_1.food)

print(id(Cat()))

print('------------------------------------------------------------')

class Cat:

    food = print('Корм')

cat_1 = Cat

cat_1.food

print(id(Cat()))

print('------------------------------------------------------------')