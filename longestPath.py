#! /usr/local/bin/python

print reduce(lambda pr, cr: map(lambda (i, ele):
	(ele + pr[i] > ele + pr[i+1]) and ele + pr[i] or ele + pr[i+1], enumerate(cr)), 
list([[int(word) for word in line.split(" ")] for line in reversed(list(open("data.txt")))]))
