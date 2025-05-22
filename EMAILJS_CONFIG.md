# Configuração do EmailJS para o Formulário de Contato

Este documento explica como configurar o serviço EmailJS para funcionar com o formulário de contato do site da Montline.

## Passo 1: Criar uma conta no EmailJS

1. Acesse o site [EmailJS](https://www.emailjs.com/) e clique em "Sign Up" para criar uma conta gratuita.
2. Após criar a conta, faça login no painel administrativo.

## Passo 2: Configurar um serviço de e-mail

1. No painel administrativo, vá até a guia "Email Services" e clique em "Add New Service".
2. Selecione o provedor de e-mail que você deseja usar (Gmail, Outlook, etc.).
3. Siga as instruções para conectar sua conta de e-mail ao EmailJS.
4. Após conectar, dê um nome ao seu serviço (por exemplo, "montline-email") e anote o Service ID.

## Passo 3: Criar um Template de E-mail

1. Vá para a guia "Email Templates" e clique em "Create New Template".
2. Configure o assunto do e-mail (por exemplo, "Nova mensagem do site Montline").
3. No conteúdo do e-mail, você pode usar as seguintes variáveis que correspondem aos campos do formulário:
   ```
   Nome: {{name}}
   Email: {{email}}
   Telefone: {{phone}}
   Mensagem: {{message}}
   ```
4. Salve o template e anote o Template ID.

## Passo 4: Obter a chave pública

1. Vá para a guia "Account" e procure por "API Keys".
2. Copie sua Public Key.

## Passo 5: Atualizar o componente ContactForm.jsx

1. Abra o arquivo `src/components/ContactForm.jsx` e substitua os placeholders pelos seus valores reais:
   - Substitua 'YOUR_SERVICE_ID' pelo Service ID que você anotou
   - Substitua 'YOUR_TEMPLATE_ID' pelo Template ID que você anotou
   - Substitua 'YOUR_PUBLIC_KEY' pela Public Key que você copiou

```jsx
emailjs.sendForm(
  "YOUR_SERVICE_ID", // Substitua pelo seu Service ID do EmailJS
  "YOUR_TEMPLATE_ID", // Substitua pelo seu Template ID do EmailJS
  form.current,
  "YOUR_PUBLIC_KEY" // Substitua pela sua Public Key do EmailJS
);
```

## Plano gratuito do EmailJS

Com o plano gratuito do EmailJS, você pode enviar até 200 e-mails por mês. Se precisar de mais, considere atualizar para um plano pago.

## Segurança

Embora as chaves públicas do EmailJS sejam projetadas para serem expostas no cliente, é sempre uma boa prática implementar medidas anti-spam no formulário, como captcha, para evitar abusos.
