import webapp2

class Main(webapp2.RequestHandler):
    def get(self):
        previous = 0
        current = 1

        for i in range (9):
            self.response.write(previous)
            self.response.write("<br>")

            temp = current
            current  = current + previous
            previous = temp


app = webapp2.WSGIApplication(
    [
        ("/", Main)
    ]
)