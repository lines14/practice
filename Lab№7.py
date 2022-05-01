print('\nЗадание №1:\n')

# Создаём родительский класс и инициализируем в нём три атрибута:

class Cat:

    def __init__(kitty, color, area, weight):
        kitty.color = color
        kitty.area = area
        kitty.weight = weight

    # Задаём три метода, описывающих поведение кошки:
     
    def describe_cat(kitty):
        print(f'Окрас кошки: {kitty.color}')
        print(f'Ареал обитания кошки: {kitty.area}')
        print(f'Вес кошки: {kitty.weight}')

    def cat_eats(kitty):
        print('Кошка ест мясо')

    def cat_says(kitty):
        print('Кошка мяукает')

# Создаём субкласс и задаём в нём два требуемых метода
# (дополненный и переопределённый):

class Tiger(Cat):

    def cat_eats(big_kitty):
        super().cat_eats()
        print('Тигр ест оленя')

    def cat_says(big_kitty):
        print('Тигр рычит')

# Создаём экземпляры каждого из созданных классов
# и обращаемся к методам:  

cat_1 = Cat('Чёрный','Россия','5 кг')
tiger_1 = Tiger('Полосатый', 'Танзания', '100 кг')

cat_1.describe_cat()
cat_1.cat_eats()
cat_1.cat_says()
print()
tiger_1.describe_cat()
tiger_1.cat_eats()
tiger_1.cat_says()