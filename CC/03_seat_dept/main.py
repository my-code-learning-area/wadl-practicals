import webapp2

class Main(webapp2.RequestHandler):
    def get(self):
        for i in range(10):
            self.response.write("Seat Number: S190058601 <br>")
            self.response.write("Department: IT <hr>")

app = webapp2.WSGIApplication(
    [
        ("/", Main)
    ]
)