import http.server
import urllib.parse
import asyncio
import io
import os
import sys

try:
    import edge_tts
except ImportError:
    edge_tts = None

PORT = int(os.environ.get('PORT', 8765))

class HighQualityTTSHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Private-Network', 'true')
        self.send_header('Access-Control-Allow-Methods', 'GET, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', '*')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(204)
        self.end_headers()

    def do_GET(self):
        if self.path.startswith('/api/tts'):
            query = urllib.parse.urlparse(self.path).query
            params = urllib.parse.parse_qs(query)
            text = params.get('text', [''])[0]
            voice = params.get('voice', ['en-US-JennyNeural'])[0]
            rate = params.get('rate', ['-30%'])[0]

            if not text:
                self.send_error(400, "Missing text parameter")
                return

            if not edge_tts:
                self.send_error(503, "edge_tts package not available")
                return

            async def generate_speech():
                comm = edge_tts.Communicate(text, voice, rate=rate)
                buf = io.BytesIO()
                async for chunk in comm.stream():
                    if chunk["type"] == "audio":
                        buf.write(chunk["data"])
                return buf.getvalue()

            try:
                audio_bytes = asyncio.run(generate_speech())
                self.send_response(200)
                self.send_header('Content-Type', 'audio/mpeg')
                self.send_header('Content-Length', str(len(audio_bytes)))
                self.send_header('Cache-Control', 'public, max-age=86400')
                self.end_headers()
                self.wfile.write(audio_bytes)
            except Exception as e:
                self.send_error(500, f"TTS Generation Error: {str(e)}")
            return

        super().do_GET()

if __name__ == '__main__':
    web_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(web_dir)
    server_address = ('', PORT)
    with http.server.ThreadingHTTPServer(server_address, HighQualityTTSHandler) as httpd:
        print(f"High-Quality Neural TTS Server serving {web_dir} on port {PORT}...")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server.")
