import webapp2
class Main(webapp2.RequestHandler):
    def get(self):
        self.response.write("""
            <form method='POST'>
                <input name='message'>
                <button>Show</button>
            </form>
        """)

    def post(self):
        message = self.request.get("message")
        self.response.write(message)

app = webapp2.WSGIApplication(
    [("/", Main)]
)