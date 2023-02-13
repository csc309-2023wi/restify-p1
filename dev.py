#!/usr/bin/env python3

import http.server
import socketserver
import webbrowser

PORT = 8000

# create an HTTP handler that does not cache files, and reloads itself upon every request,
# so any file changes on disk are immediately reflected
class NoCacheReloadHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=None, **kwargs)

    def end_headers(self):
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

    def do_GET(self):
        self.directory = "."
        return super().do_GET()


if __name__ == "__main__":
    with socketserver.TCPServer(("", PORT), NoCacheReloadHandler) as httpd:
        print("serving at port", PORT)
        webbrowser.get('chrome').open_new_tab(f"http://127.0.0.1:{PORT}")
        httpd.serve_forever()
