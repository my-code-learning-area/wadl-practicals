import webapp2
import urllib
import json
from google.appengine.ext.webapp import template

class MainPage(webapp2.RequestHandler):
    def get(self):
        self.response.write(template.render("./template/index.html", {}))

    def post(self):
        name = self.request.get('uname')
        url = "http://universities.hipolabs.com/search?name=" + name
        data = urllib.urlopen(url).read() #Requested
        data = json.loads(data) #data converted to json(dict)


        if len(data):
            name = data[0]["name"]
            country = data[0]["country"]
            alpha_two_code = data[0]["alpha_two_code"]
            
            self.response.write(template.render('./template/results.html', {"name": name, "country":country, "code":alpha_two_code}))
            
        else:
            self.response.write(template.render('./template/error.html', {}))
       
app = webapp2.WSGIApplication([('/', MainPage)])