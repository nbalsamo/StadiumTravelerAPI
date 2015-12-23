import requests
import csv
from bs4 import BeautifulSoup

url = 'http://www.nhl.com/ice/schedulebyseason.htm?navid=nav-sch-sea#'
response = requests.get(url)
html = response.content

soup = BeautifulSoup(html, "html.parser")
table = soup.find('table', attrs={'class': 'data schedTbl'})

csvTable = []
for row in table.findAll('tr'):
	csvRow = []
	for cell in row.findAll('td', attrs={'class': ['date', 'team', 'time']}):
		for cells in cell.findAll('div', attrs={'class': ['skedStartDateSite', 'teamName', 'skedStartTimeEST']}):
			csvRow.append(cells.text.replace(',', ''))
	csvTable.append(csvRow)
outfile = open("C:\\Users\\nbalsamo\\Desktop\\nhl.csv", "w")
writer = csv.writer(outfile)
writer.writerows(csvTable)