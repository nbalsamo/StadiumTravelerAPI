#this kind of works. Required me to manually get some stadium information when there are multiple stadiums named the same thing

import requests
import csv
from bs4 import BeautifulSoup

stadium_names = ['Falcon Stadium', 'Summa Field at InfoCision Stadium', 'Bryant–Denny Stadium', 'Kidd Brewer Stadium', 'Arizona Stadium', 'Sun Devil Stadium, Frank Kush Field', 'Donald W. Reynolds Razorback Stadium, Frank Broyles Field', 'Centennial Bank Stadium', 'Blaik Field at Michie Stadium', 'Jordan–Hare Stadium', 'Scheumann Stadium', 'McLane Stadium', 'Albertsons Stadium', 'Alumni Stadium', 'Doyt Perry Stadium', 'UB Stadium', 'LaVell Edwards Stadium', 'California Memorial Stadium', 'Bulldog Stadium', 'Rose Bowl', 'Bright House Networks Stadium', 'Kelly/Shorts Stadium', 'Jerry Richardson Stadium', 'Nippert Stadium', 'Memorial Stadium', 'Folsom Field', 'Sonny Lubick Field at Hughes Stadium', 'Rentschler Field', 'Wallace Wade Stadium', 'Rynearson Stadium', 'Dowdy–Ficklen Stadium', 'Ben Hill Griffin Stadium', 'FIU Stadium', 'FAU Stadium', 'Bobby Bowden Field at Doak Campbell Stadium', 'Sanford Stadium', 'Paulson Stadium', 'Georgia Dome', 'Bobby Dodd Stadium at Historic Grant Field', 'Aloha Stadium', 'John O\'Quinn Field at TDECU Stadium', 'Kibbie Dome', 'Memorial Stadium', 'Memorial Stadium', 'Kinnick Stadium', 'Jack Trice Stadium', 'Memorial Stadium', 'Bill Snyder Family Football Stadium', 'Dix Stadium', 'Commonwealth Stadium', 'Tiger Stadium', 'Joe Aillet Stadium', 'Cajun Field', 'Malone Stadium', 'Papa Johns Cardinal Stadium', 'Joan C. Edwards Stadium', 'Byrd Stadium', 'Warren McGuirk Alumni Stadium[O 1]', 'Liberty Bowl Memorial Stadium', 'Sun Life Stadium', 'Yager Stadium', 'Michigan Stadium', 'Spartan Stadium', 'Johnny "Red" Floyd Stadium', 'TCF Bank Stadium', 'Vaught–Hemingway Stadium', 'Davis Wade Stadium', 'Faurot Field', 'Navy–Marine Corps Memorial Stadium', 'Memorial Stadium', 'Mackay Stadium', 'Sam Boyd Stadium', 'University Stadium', 'Aggie Memorial Stadium', 'Kenan Memorial Stadium', 'Carter–Finley Stadium', 'Apogee Stadium', 'Huskie Stadium', 'Ryan Field', 'Notre Dame Stadium', 'Peden Stadium', 'Ohio Stadium', 'Gaylord Family Oklahoma Memorial Stadium', 'Boone Pickens Stadium', 'Foreman Field', 'Autzen Stadium', 'Reser Stadium', 'Beaver Stadium', 'Heinz Field', 'Ross–Ade Stadium', 'Rice Stadium', 'High Point Solutions Stadium', 'Qualcomm Stadium', 'Spartan Stadium', 'Ladd Peebles Stadium', 'Williams-Brice Stadium', 'Raymond James Stadium', 'Los Angeles Memorial Coliseum', 'Gerald J. Ford Stadium', 'M. M. Roberts Stadium', 'Stanford Stadium', 'Carrier Dome', 'Lincoln Financial Field', 'Neyland Stadium', 'Darrell K Royal–Texas Memorial Stadium', 'Kyle Field', 'Amon G. Carter Stadium', 'Jim Wacker Field at Bobcat Stadium', 'Jones AT&T Stadium', 'Sun Bowl Stadium', 'Alamo Dome', 'Glass Bowl', 'Veterans Memorial Stadium', 'Benson Field at Yulman Stadium', 'Skelly Field at H. A. Chapman Stadium', 'Rice-Eccles Stadium', 'Romney Stadium', 'Vanderbilt Stadium', 'Scott Stadium', 'Lane Stadium', 'BB&T Field', 'Husky Stadium', 'Martin Stadium', 'Mountaineer Field at Milan Puskar Stadium', 'Houchens Industries–L. T. Smith Stadium', 'Waldo Stadium', 'Camp Randall Stadium', 'War Memorial Stadium' ]

with open('C:\\Users\\nbalsamo\\Desktop\\stadium.csv','wb') as f: 
	for name in stadium_names:
		url = 'https://en.wikipedia.org/wiki/' + name
		response = requests.get(url)
		html = response.content

		soup = BeautifulSoup(html, "html.parser")
		latitude = soup.find('span', attrs={'class': 'latitude'})
		longitude = soup.find('span', attrs={'class': 'longitude'})
		if latitude is not None:\
			text = latitude.text + " " +  longitude.text + "\n"
			f.write(text.encode('utf-8'))
		if latitude is None:
			text = "not found"  + "\n"
			f.write(text.encode('utf-8'))
