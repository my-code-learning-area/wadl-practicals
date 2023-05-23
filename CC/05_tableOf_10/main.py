import webapp2

class Main(webapp2.RequestHandler):

    def get(self):
        number = 10
        self.response.write("<a><button>Click On Meee</button></a>")
        self.response.write("<pre>")

        for i in range(1, 11):
            self.response.write(number)
            self.response.write(" x ")
            self.response.write(i)
            self.response.write(" = ")
            self.response.write(number * i)
            self.response.write("<br>")

        self.response.write("</pre>")

app = webapp2.WSGIApplication(
    [
        ("/", Main)
    ]
)