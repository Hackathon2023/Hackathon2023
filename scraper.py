import requests
from bs4 import BeautifulSoup

URL = "https://catalog.unc.edu/courses/"
page = requests.get(URL)

soup = BeautifulSoup(page.content, "html.parser")

asdf = 0

with open("classes.txt", "w") as f:
    for i in soup.find(id = "/courses/").find_all("a"):

        department = i.get_text().split(" ")[-1][1:-1]
        print(department)
        
        tempPage = requests.get(URL + department.lower() + "/")
        tempSoup = BeautifulSoup(tempPage.content, "html.parser")

        for j in tempSoup.find_all("strong"):
            if (department in j.get_text()):
                if (len(j.get_text()) < 11):
                    f.write(j.get_text()[0:-1] + "\n")

                
        





