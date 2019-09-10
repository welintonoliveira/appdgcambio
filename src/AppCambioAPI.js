class AppCambioAPI {
  // Executa o cancelamento do pedido do cliente
  async cancelarPedido(idPedido, idCliente, motivo) {
    let response = await fetch(
      "https://hlg-dgc-ljc-web.primecase.com.br/Mobile/Services/PedidoService.asmx/CancelarPedido",
      {
        method: "POST",
        body: JSON.stringify({
          idPedido: idPedido,
          idCliente: idCliente,
          motivo: motivo
        })
      }
    );

    return await response.json();
  }

  // Executa o envio de email de nova senha
  async enviarNovaSenha(email) {
    let response = await fetch(
      "https://hlg-dgc-ljc-web.primecase.com.br/Mobile/Services/ClienteService.asmx/SendEmailNovaSenha",
      {
        method: "POST",
        body: JSON.stringify({
          ClienteID: 0,
          ClienteNome: "",
          ClienteEmail: email,
          ClienteSenha: "",
          ClienteCPF: "",
          DescricaoAparelho: "",
          AppImei: "",
          IsLogado: true
        })
      }
    );

    return await response.json();
  }

  // Desloga o cliente da base de dados
  deslogarCliente(token) {
    return new Promise(function(resolve, reject) {
      fetch(
        "https://hlg-dgc-ljc-api.primecase.com.br/api/cliente/ExitUsuarioLogado",
        {
          method: "POST",
          body: JSON.stringify({
            ClienteID: 0,
            ClienteNome: "",
            ClienteEmail: "",
            ClienteSenha: "",
            ClienteCPF: "",
            DescricaoAparelho: "",
            Token: token,
            IsLogado: true
          })
        }
      )
        .then(r => r.json())
        .then(json => {
          resolve(json);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  // Verifica se o cliente está logado
  verificarClienteLogado(token) {
    return new Promise(function(resolve, reject) {
      fetch(
        "http://hlg-dgc-ljc-api.primecase.com.br/api/cliente/CheckUsuarioLogado",
        {
          method: "POST",
          body: JSON.stringify({
            ClienteID: 0,
            ClienteNome: "",
            ClienteEmail: "",
            ClienteSenha: "",
            ClienteCPF: "",
            DescricaoAparelho: "",
            AppImei: token,
            IsLogado: true
          })
        }
      )
        .then(r => r.json())
        .then(json => {
          resolve(json);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  // Envia uma nova senha para o cliente
  enviarSenha(email) {
    return new Promise(function(resolve, reject) {
      fetch(
        `https://hlg-dgc-ljc-web.primecase.com.br/Mobile/Services/ClienteService.asmx/EnviarSenha?Email=${email}`
      )
        .then(r => r.json())
        .then(json => {
          resolve(json);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  // Checa se existe um cliente cadastrado na base com o cpf informado
  async checkCPF(cpf) {
    let response = await fetch(
      "https://hlg-dgc-ljc-web.primecase.com.br/Mobile/Services/ClienteService.asmx/CheckClienteByCPF",
      {
        method: "POST",
        body: JSON.stringify({
          ClienteID: 0,
          ClienteNome: "",
          ClienteEmail: "",
          ClienteSenha: "",
          ClienteCPF: cpf,
          DescricaoAparelho: "",
          AppImei: "",
          IsLogado: false
        })
      }
    );

    return await response.json();
  }

  // Checa se existe um cliente cadastrado na base com o email informado
  async checkEmail(email) {
    let response = await fetch(
      "https://hlg-dgc-ljc-web.primecase.com.br/Mobile/Services/ClienteService.asmx/CheckClienteByEmail",
      {
        method: "POST",
        body: JSON.stringify({
          ClienteID: 0,
          ClienteNome: "",
          ClienteEmail: email,
          ClienteSenha: "",
          ClienteCPF: "",
          DescricaoAparelho: "",
          AppImei: "",
          IsLogado: false
        })
      }
    );

    return await response.json();
  }

  // Carrega os pedidos do cliente
  async carregarPedidosByIDCliente(idCliente) {
    let response = await fetch(
      "https://hlg-dgc-ljc-web.primecase.com.br/mobile/services/PedidoService.asmx/GetAll",
      {
        method: "POST",
        body: JSON.stringify({
          ClienteID: idCliente,
          ClienteNome: "",
          AppImei: "",
          IsLogado: true
        })
      }
    );

    return await response.json();
  }

  // Desloga o cliente de outro aparelho
  async logoutCliente(email, senha) {
    let response = await fetch(
      "https://hlg-dgc-ljc-api.primecase.com.br/api/cliente/DeslogarCliente",
      {
        method: "POST",
        body: JSON.stringify({
          ClienteID: 0,
          ClienteNome: "",
          ClienteEmail: email,
          ClienteSenha: senha,
          ClienteCPF: "",
          DescricaoAparelho: "",
          AppImei: "",
          IsLogado: false
        })
      }
    );

    return await response.json();
  }

  // Get Token do cliente de acaesso
  async getTokenCliente(email, senha) {
    let response = await fetch(
      "https://hlg-dgc-ljc-api.primecase.com.br/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        body: `grant_type=password&username=${encodeURIComponent(
          email
        )}&password=${senha}`
      }
    );

    return await response.json();
  }

  // Checa se o cliente está logado com o token informado
  async checkClienteLogadoByToken(token) {
    let response = await fetch(
      "https://hlg-dgc-ljc-api.primecase.com.br/api/cliente/CheckUsuarioLogado",
      {
        method: "POST",
        body: JSON.stringify({
          ClienteID: 0,
          ClienteNome: "",
          ClienteEmail: "",
          ClienteSenha: "",
          ClienteCPF: "",
          DescricaoAparelho: "",
          Token: token,
          IsLogado: false
        })
      }
    );

    return await response.json();
  }

  // Exeutar login do cliente
  async login(email, senha, descricaoAparelho) {
    let response = await fetch(
      "https://hlg-dgc-ljc-api.primecase.com.br/api/cliente/Login",
      {
        method: "POST",
        body: JSON.stringify({
          ClienteID: 0,
          ClienteNome: "",
          ClienteEmail: email,
          ClienteSenha: senha,
          ClienteCPF: "",
          DescricaoAparelho: descricaoAparelho,
          Token: "",
          IsLogado: true
        })
      }
    );

    return await response.json();
  }

  // Altera a senha do cliente
  async alterarSenha(email, senhaAtual, novaSenha) {
    let response = await fetch(
      `https://hlg-dgc-ljc-api.primecase.com.br/api/cliente/AlterarSenha?email=${encodeURIComponent(
        email
      )}&senhaAtual=${senhaAtual}&novaSenha=${novaSenha}`,
      {
        method: "POST"
      }
    );

    return await response.json();
  }

  // Altera a senha do cliente
  async getPracas() {
    let response = await fetch(
      "https://hlg-dgc-ljc-web.primecase.com.br/Mobile/Services/pracaservice.asmx/GetPracas"
    );

    return await response.json();
  }

   // Recupera a coleção de vitrines
  /*async getVitrine() {
    let response = await fetch("https://hlg-dgc-ljc-web.primecase.com.br/Handlers/VitrineMobileTurismoModelo1.ashx");

    return await response.json();
  }*/

  getVitrine() {
    return fetch("https://hlg-dgc-ljc-web.primecase.com.br/Handlers/VitrineMobileTurismoModelo1.ashx");
  }  

  // Envia uma nova senha para o cliente
  enviarSenhaPorCPF(cpf) {
    return new Promise(function(resolve, reject) {
      fetch(
        `https://hlg-dgc-ljc-web.primecase.com.br/Mobile/Services/ClienteService.asmx/EnviarSenhaPorCPF?CPF=${cpf}`
      )
        .then(r => r.json())
        .then(json => {
          console.log("api result email", email);
          console.log("api result senha", senha);
          resolve(json);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  sendCompra(idTipoOperacao, isRecarga, idPraca, idItemVitrine, quantidadeMe) {
    return fetch(`https://hlg-dgc-ljc-web.primecase.com.br/Mobile/CarrinhoModelo1/initVitrine.aspx?CompraMobile=Mobile&idTipoOperacao=${idTipoOperacao}&isRecarga=${isRecarga}&idPraca=${idPraca}&idItemVitrine=${idItemVitrine}&quantidadeMe=${quantidadeMe}`);
  }  
}

export default new AppCambioAPI();
