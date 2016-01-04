# I dont actually do anything with this file

import requests
import csv
from bs4 import BeautifulSoup

url = 'http://www.nfl.com/schedules/2015/REG'
response = requests.get(url)
html = response.content

soup = BeautifulSoup(html, "html.parser")
table = soup.find_all('ul', attrs={'class': 'schedules-table'})

# table[0] is the next upcoming game 

csvTable = []
for row in table[1].findAll('li', attrs={'class': ['schedules-list-date']}):
	print(row.text)