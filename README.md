# Website Institucional - Program.Ada (Processo Seletivo IDE JR)

![License](https://img.shields.io/badge/license-MIT-blue.svg)

**Projeto desenvolvido pela Equipe 2** como parte do processo seletivo da IDE JR.

---

## 📜 Sobre o Projeto

Este repositório contém o website institucional completo do **Program.Ada**, um coletivo de mulheres da computação da UFRGS. O projeto foi desenvolvido pela **Equipe 2** como nossa entrega para o processo seletivo da **IDE JR**, demonstrando nossas habilidades em desenvolvimento full-stack, desde um frontend responsivo e interativo até um backend funcional e seguro.

---

## ✨ Principais Funcionalidades

- **Design Totalmente Responsivo** para desktops, tablets e celulares.
- **Menu Hamburger Funcional** implementado com JavaScript puro.
- **Carrosséis Interativos** para Projetos (horizontal) e Integrantes (vertical/paginado).
- **Formulário de Contato Funcional** com envio de e-mail assíncrono (backend em Flask).
- **Feedback Visual** para o usuário após o envio do formulário.

## 🛠️ Tecnologias Utilizadas

- **Frontend:** HTML5, CSS3, JavaScript
- **Backend:** Python, Flask

## 🚀 Como Executar o Projeto

Para clonar e executar este projeto em sua máquina local, siga os passos abaixo.

1.  **Clone o repositório:**

    ```sh
    git clone [https://github.com/rafaelsilvacalil-design/projeto-equipe2.git](https://github.com/rafaelsilvacalil-design/projeto-equipe2.git)
    cd projeto-equipe2
    ```

2.  **Crie e ative um ambiente virtual:**

    - No **Windows**:
      ```sh
      python -m venv venv
      venv\Scripts\activate
      ```
    - No **macOS/Linux**:
      ```sh
      python3 -m venv venv
      source venv/bin/activate
      ```

3.  **Instale as dependências:**
    O arquivo `requirements.txt` contém todos os pacotes Python necessários. Instale-os com um único comando:

    ```sh
    pip install -r requirements.txt
    ```

4.  **Configure as Variáveis de Ambiente:**

    - Crie um arquivo chamado `.env` na raiz do projeto.
    - Adicione suas credenciais de e-mail a este arquivo para que o formulário de contato funcione:
      ```env
      SENDER_EMAIL="seu-email-gmail@gmail.com"
      SENDER_PASSWORD="sua-senha-de-app-do-gmail"
      ```
    - **Importante:** Adicione a linha `.env` ao seu arquivo `.gitignore` para manter suas credenciais seguras.

5.  **Execute a aplicação:**

    ```sh
    python programada.py
    ```

6.  **Acesse no navegador:**
    Abra seu navegador e acesse `http://127.0.0.1:5000`.

---

## 📄 Licença

Este projeto está distribuído sob a licença MIT.

## 👥 Equipe

- **Projeto desenvolvido pela Equipe 2** para o Processo Seletivo da IDE JR.
