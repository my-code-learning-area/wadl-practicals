import webapp2
import urllib
import json
from google.appengine.ext.webapp import template

class MainPage(webapp2.RequestHandler):
    def get(self):
        template_values={}
        self.response.out.write(template.render("templates/index.html",template_values))
    
    def post(self):
        latitude=self.request.get('latitude')
        longitude=self.request.get('longitude')
        
        url="https://api.open-meteo.com/v1/forecast?latitude="+latitude+"&longitude="+longitude+"&current_weather=true"
        data=urllib.urlopen(url).read()
        data=json.loads(data)
        
        if data.get("error") is not None:
            template_values={}
            self.response.out.write(template.render('./templates/error.html',template_values))
        else:
             temperature=data["current_weather"]["temperature"]
             windspeed=data["current_weather"]["windspeed"]
             template_values={"temperature":temperature,"windspeed":windspeed}
             self.response.out.write(template.render('./templates/result.html',template_values))


        

app=webapp2.WSGIApplication([('/',MainPage)],debug=True)
