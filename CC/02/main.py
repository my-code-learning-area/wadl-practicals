import webapp2

class Main(webapp2.RequestHandler):
    def get(self):
        for i in range(5):
            self.response.write(" Name: Sumit Kawale <br>")
            self.response.write(" Rollno: 33323 <br>")
            self.response.write(" Department: IT <hr>")

app = webapp2.WSGIApplication(
    [("/", Main)]
)