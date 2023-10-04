import bs4
from bs4 import BeautifulSoup as bs
import requests
link ='https://www.flipkart.com/'
page = requests.get(link)

soup = bs(page.content, 'html.parser')
categories = soup.find_all('div',class_='_58bkzq62 _3n8fnaug _3n8fnamv _3n8fnaf9 _3n8fna1 _3n8fna7n _58bkzqh _1i2djtb9 _1i2djt0')
categoryNames = list( map(lambda x : x.text   , categories))


print(categoryNames)

x = soup.find_all('div',class_='_25HC_u')
# print(x)
y = list(map(lambda x:( x.div.div.div.a.picture.source["srcset"]), x))
print(y)
# productimgs = list(map(lambda x: x.div.picture['srcset'], soup.find_all('a',class_='_3n8fnaug _3n8fnars _3n8fnak6 _3n8fna4y _3n8fnack _1i2djtb9 _1i2djtf')))
# print(productimgs)

