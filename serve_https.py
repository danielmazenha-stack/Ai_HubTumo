#!/usr/bin/env python3
import os
import sys
from http.server import HTTPServer, SimpleHTTPRequestHandler
import ssl

def main():
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
    cert = sys.argv[2] if len(sys.argv) > 2 else 'cert.pem'
    key = sys.argv[3] if len(sys.argv) > 3 else 'key.pem'

    os.chdir(os.path.dirname(__file__) or '.')
    httpd = HTTPServer(('0.0.0.0', port), SimpleHTTPRequestHandler)
    try:
        httpd.socket = ssl.wrap_socket(httpd.socket, certfile=cert, keyfile=key, server_side=True)
    except Exception as e:
        print('Erro ao configurar SSL:', e)
        sys.exit(1)

    print(f'Servindo HTTPS em https://localhost:{port}')
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print('\nInterrompido pelo utilizador')
    finally:
        httpd.server_close()

if __name__ == '__main__':
    main()
