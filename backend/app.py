from flask import Flask, request, jsonify

app = Flask(__name__)

static_quotes = {
    "success": ["Success is not final; failure is not fatal.", "Don’t watch the clock; do what it does."],
    "life": ["Life is what happens when you're busy making other plans.", "Get busy living or get busy dying."],
    "friendship": ["Friendship is the only cement that will ever hold the world together."]
}

@app.route("/generate", methods=["POST"])
def generate_quote():
    data = request.get_json()
    topic = data.get("topic", "").lower()
    quotes = static_quotes.get(topic, ["Be yourself; everyone else is already taken."])
    return jsonify({"quote": quotes[0]})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
