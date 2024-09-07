<img align="right" width="10%" src="/assets/imgs/reelandread.png">

# Reel & Read - Filmes, Livros e Séries 

Este projeto foi desenvolvido durante a Imersão Dev [Alura](https://www.alura.com.br/) com [Google Gemini](https://gemini.google.com/).
   
## 💡 Sobre o projeto
<div align="center">
   <img src="/assets/imgs/preview.png" width="45%"> <img src="/assets/imgs/preview2.png" width="45%">
</div>
   
O **Reel & Reed** é um repositório com informações sobre filmes, séries e livros. Com uma interface intuitiva e design moderno, o **Reel & Read** permite que você explore um vasto catálogo de obras, descubra novas sugestões personalizadas. Utilize as poderosas ferramentas de busca para encontrar exatamente o que você procura. Além dos títulos recomendados, o **Reel & Read** se integra com duas APIs, facilitando a consulta a outros títulos que sejam do seu interesse.

## 🛠️ Como usar
### 💻 Acesse na web
Acesse o site: https://vercel.com/rafaferrazs-projects/reel-and-read

### ⚙️ Configurando o ambiente
1. Clone o repositório com o seguinte comando:
   ```
   https://github.com/rafaferraz/reel-and-read.git
   ```

2. Instale a extensão do Live Server no VS Code *(Sugestão)*

    a. Clique com o botão direito sobre o arquivo `index.html` e abra com o Live Server

### ⚙️ Ativando a integração com as APIs

#### 🎬 OMDd API 
A [OMDb API](https://www.omdbapi.com/) foi utilizada para consultar dados de filmes e séries.

1. Configure sua API Key pelo site https://www.omdbapi.com/apikey.aspx
2. Substitua a sua chave na constante `OMDbApiKey` que se encontra no arquivo `app.js` 

#### 📚 Google Books APIs
O [Books API](https://developers.google.com/books/docs/v1/getting_started) foi utilizada para consultar dados de livros.

1. Configure sua API Key pelo link https://console.cloud.google.com/apis/credentials
2. Substitua a sua chave na constante `googleApiKey` que se encontra no arquivo `app.js` 

Após configurar as duas chaves, ainda no arquivo `app.js`, substitua o valor a constante `useApis` para `true`:
```
const useApis = true;
```

✨ Pronto! Agora é só rodar a aplicação e explorar.

