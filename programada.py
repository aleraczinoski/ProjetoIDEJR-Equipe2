from flask import Flask, render_template, request, Response
import smtplib, ssl
import threading

SENDER_EMAIL = "equipe2program.ada@gmail.com"
SENDER_PASSWORD = "zocn refd sxsk igsq" 

app = Flask(__name__)

def send_emails_async(nome, email_do_usuario, mensagem_do_usuario):
    """Função que envia e-mails em um thread separado (segundo plano)."""

    message_to_sender = f"""\
Subject: [NOVA MENSAGEM] de {nome} ({email_do_usuario})

MENSAGEM RECEBIDA DO FORMULÁRIO DE CONTATO:
------------------------------------------
Nome do Remetente: {nome}
E-mail para Resposta: {email_do_usuario}
Mensagem:
{mensagem_do_usuario}
------------------------------------------

Por favor, responda diretamente para {email_do_usuario}."""

    message_to_user = f"""\
Subject: Confirmação: Recebemos sua mensagem!

Olá, {nome},

Obrigado por entrar em contato! Recebemos sua mensagem com sucesso e nossa equipe responderá o mais breve possível.

Aqui está uma cópia do que você nos enviou:
---
Mensagem:
{mensagem_do_usuario}
---

Atenciosamente,
Sua Equipe"""

    context = ssl.create_default_context()

    try:
        with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as server:
            server.login(SENDER_EMAIL, SENDER_PASSWORD)
            
            server.sendmail(SENDER_EMAIL, SENDER_EMAIL, message_to_sender.encode('utf-8'))

            server.sendmail(SENDER_EMAIL, email_do_usuario, message_to_user.encode('utf-8'))
            
        print(f"E-mails enviados com sucesso para {email_do_usuario} e {SENDER_EMAIL}")
        
    except Exception as e:
        print(f"ERRO DE ENVIO EM SEGUNDO PLANO: {e}")

@app.route('/')
def mostrar_formulario():
    return render_template('index.html')

@app.route('/processar', methods=['POST'])
def processar_dados():
    nome = request.form.get('name') 
    email_do_usuario = request.form.get('email')
    mensagem_do_usuario = request.form.get('message')

    if not nome or not email_do_usuario or not mensagem_do_usuario:
        return Response(status=400)

    thread = threading.Thread(
        target=send_emails_async, 
        args=(nome, email_do_usuario, mensagem_do_usuario)
    )
    thread.start()
    
    return Response(status=204)

if __name__ == '__main__':
    app.run(debug=True)
