#! /usr/local/bin/python
limit = 1001 * 1001
current_number = 1
change_place = 1
sum = 0
while current_number <= limit:
	sum += current_number
	if current_number == (change_place * change_place):
		change_place += 2
	current_number += change_place - 1 

print sum

