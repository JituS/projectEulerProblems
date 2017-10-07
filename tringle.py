#! /usr/local/bin/python

file = open("file.txt").read()
lines = file.split('\n')
f = []
for line in lines:
	a = line.split(' ')
	line = map(lambda b: int(b), a)
	f.append(line)

reversed_list = list(reversed(f))

def reduce_func(pr, cr):
	a = []
	max = -1
	for ele in range(len(cr)):
		max = (cr[ele] + pr[ele]) if (cr[ele] + pr[ele] > cr[ele] + pr[ele+1]) else (cr[ele] + pr[ele+1])
		a.append(max)
	return a


print reduce(reduce_func, reversed_list)




