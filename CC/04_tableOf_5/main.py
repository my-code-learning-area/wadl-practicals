import webapp2

class Main(webapp2.RequestHandler):
    def get(self):
        self.response.write("<pre>") # optional line
        for i in range(1, 11):
            self.response.write("5 x ")
            self.response.write(i)
            self.response.write(" = ")
            self.response.write(5 * i)
            self.response.write("<br>")

        self.response.write("</pre>") # optional line

app = webapp2.WSGIApplication(
    [
        ("/", Main)
    ]
)