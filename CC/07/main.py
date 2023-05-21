import webapp2
import urllib
import json
from google.appengine.ext.webapp import template

class MainPage(webapp2.RequestHandler):
    def get(self):
        temp = {}
        self.response.write(template.render("./template/index.html", temp))

    def post(self):
        pincode = self.request.get('pincode')
        url = "https://api.postalpincode.in/pincode/" + pincode
        data = urllib.urlopen(url).read() #Requested
        data = json.loads(data) #data converted to json(dict)
        status = data[0]['Status']

        if status == "Success":
            name = data[0]['PostOffice'][0]['Name']
            region = data[0]['PostOffice'][0]['Region']
            temp = {"name": name, "region": region}
            self.response.write(template.render('./template/results.html', temp))
            
        if status == "Error":
            temp = {"data": data}
            self.response.write(template.render('./template/error.html', temp))
       
app = webapp2.WSGIApplication([('/', MainPage)])