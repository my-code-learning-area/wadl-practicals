import webapp2
class Main(webapp2.RequestHandler):
    def get(self):
        self.response.write("Hello World!!")

app = webapp2.WSGIApplication(
    [("/", Main)]
)