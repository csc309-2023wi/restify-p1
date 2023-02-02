#!/usr/bin/env python3

import http.server
import socketserver
import webbrowser

PORT = 8000

# create an HTTP handler that does not cache files, so any file changes on disk are immediately reflected
class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()


if __name__ == "__main__":
    with socketserver.TCPServer(("", PORT), NoCacheHandler) as httpd:
        print("serving at port", PORT)
        webbrowser.open_new_tab(f"http://127.0.0.1:{PORT}")
        httpd.serve_forever()
