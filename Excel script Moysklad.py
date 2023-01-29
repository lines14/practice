with open('/home/lines14/projects/practice/modifications.txt', 'r') as file_1:
    f1 = file_1.readlines()

with open('/home/lines14/projects/practice/codes.txt', 'r') as file_2:
    f2 = file_2.readlines()

spis = []
for i in f2:
    i = i.strip()
    spis.append(i)

spis_2 = []
for i in f1:
    i = i.strip()
    i = i.split()
    spis_2.append(i)

uniq_and_fifa = dict(zip(spis, spis_2))

for i in uniq_and_fifa.items():
    for j in i[1]:
        kok = i[0]+'\t'+j+'\n'
        with open('/home/lines14/projects/practice/final.txt', 'a') as kek:
            kek.write(kok)