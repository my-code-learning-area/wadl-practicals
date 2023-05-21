import webapp2

class Main(webapp2.RequestHandler):
    def get(self):
        self.response.write("<pre>")

        for i in range(1, 11):
            self.response.write("10 x ")
            self.response.write(i)
            self.response.write(" = ")
            self.response.write(10 * i)
            self.response.write("<br>")

        self.response.write("</pre>")

app = webapp2.WSGIApplication(
    [
        ("/", Main)
    ]
)