import bs4
from bs4 import BeautifulSoup as bs
import requests

link='https://www.flipkart.com/computers/monitors/pr?sid=6bo%2C9no&fm=neo%2Fmerchandising&iid=M_ce1a6f68-d7d2-4ae1-875c-0d0877d9a11f_2_372UD5BXDFYS_MC.ECL5SFI77NSY&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_3_L2_view-all&cid=ECL5SFI77NSY&p%5B%5D=facets.fulfilled_by%255B%255D%3DFlipkart%2BAssured&p%5B%5D=facets.brand%255B%255D%3DLenovo&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuTc5NDkiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJNb25pdG9ycyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sImhlcm9QaWQiOnsic2luZ2xlVmFsdWVBdHRyaWJ1dGUiOnsia2V5IjoiaGVyb1BpZCIsImluZmVyZW5jZVR5cGUiOiJQSUQiLCJ2YWx1ZSI6Ik1PTkZWNUhSTkY0UUZWRzQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19'
page = requests.get(link)

soup = bs(page.content, 'html.parser')

models = soup.find_all('a',class_='_1fQZEK')

result = {
  
}

def getModelData():
 for i in range(0, len(models)):
  url = 'https://www.flipkart.com'+models[i]['href']
  r = requests.get(url)
  _soup = bs(r.content, 'html.parser')
  name = _soup.find('span',class_='B_NuCI').text
  price = _soup.find('div',class_='_30jeq3 _16Jk6d').text
  original_price = _soup.find('div',class_='_3I9_wc _2p6lqe').text
  off = _soup.find('div',class_='_3Ay6Sb _31Dcoz').span.text
  highlights = list( map(lambda x: x.text, _soup.find_all('li',class_='_21Ahn-')))
#   _imgs = _soup.find_all('img',class_='q6DClP')
  rating = _soup.find('div',class_='_3LWZlK').text
  ratingsAndReviews = _soup.find('span',class_='_2_R_DZ').text
  description = _soup.find('div',class_='_1mXcCf RmoJUa')
  imgs = list(map(lambda x: x['src'], _soup.find_all('img',class_='q6DClP')))  
#   print(description)
#   if (description == None):
#     description = 'No description available'
 
  result[str(i)] = {
     'name': name,
     'price': price,
     'original_price': original_price,
     'off': off,
     'rating': rating,
     'ratingsAndReviews': ratingsAndReviews,
     'highlights': highlights,
     'description':  description.p.text if description!=None else 'No description available',
     'imgs': imgs
      }

getModelData()  

print(result)







