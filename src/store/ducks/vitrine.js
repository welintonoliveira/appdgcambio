// Action Types

export const Types = {
  CHANGE_PRACA: "vitrine/CHANGE_PRACA",
  CHANGE_VALOR_ME: "vitrine/CHANGE_VALOR_ME",
  CHANGEITEMVITRINE: "vitrine/CHANGEITEMVITRINE",
  CHANGE_VALOR_MN: "vitrine/CHANGE_VALOR_MN",
  CHANGEPRODUTO: "vitrine/CHANGEPRODUTO",
  CHANGE_TIPO_OPERACAO: "vitrine/CHANGE_TIPO_OPERACAO",
  SET_VALOR_INICIAL: "vitrine/SET_VALOR_INICIAL",
  SET_IS_RECARGA: "vitrine/SET_IS_RECARGA",
};

// Reducer

const initialState = {
  idProduto: 0,
  idTipoOperacao: 0,
  idPraca: 0,
  idVitrine: 0,
  idItemVitrine: 0,
  valorMe: 0,
  valorMn: 0,
  taxa: 0,
  siglaMoeda: "",
  isRecarga: false
};

export default function reducer(state = initialState, action) {
  let valorMnNew = 0;
  let valorMeNew = 0;

  let actualState = null;

  switch (action.type) {
    case Types.SET_IS_RECARGA:
      actualState = {
        ...state,
        isRecarga: action.payload.isRecarga
      };
      break;
    case Types.SET_VALOR_INICIAL:
      actualState = {
        ...state,
        valorMe: action.payload.valorMe,
        valorMn: action.payload.valorMn,
        taxa: action.payload.taxa,
        siglaMoeda: action.payload.siglaMoeda
      };
      break;
    case Types.CHANGE_TIPO_OPERACAO:
      actualState = {
        ...state,
        idTipoOperacao: action.payload.idTipoOperacao
      };
      break;
    case Types.CHANGEPRODUTO:
      actualState = {
        ...state,
        idProduto: action.payload.idProduto
      };
      break;
    case Types.CHANGE_PRACA:
      actualState = {
        ...state,
        idPraca: action.payload.idPraca
      };
      break;
    case Types.CHANGE_VALOR_ME:

      console.log('action.payload.valorMe', parseFloat(action.payload.valorMe));

      console.log('action.payload.valorMe > 0', (parseFloat(action.payload.valorMe) > 0));

      if(parseFloat(action.payload.valorMe) > 0){
        valorMeNew = action.payload.valorMe;
        valorMnNew = (action.payload.valorMe * state.taxa);
      }else{
        valorMeNew = 0.00;
        valorMnNew = 0.00;
      }
          
      actualState = {
        ...state,
        valorMe: valorMeNew,
        valorMn: valorMnNew
      };
      break;
    case Types.CHANGEITEMVITRINE:
      //  Executa a troca do item da vitrine
      //let r = onItemChanged();

      actualState = {
        ...state,
        idItemVitrine: action.payload.idItemVitrine
      };
      break;
    case Types.CHANGE_VALOR_MN:
      if (action.payload.valorMn > 0) {
        valorMnNew = action.payload.valorMn;
        valorMeNew = valorMnNew / parseFloat(state.taxa);
      }

      actualState = {
        ...state,
        valorMn: valorMnNew,
        valorMe: valorMeNew
      };
      break;
    default:
      actualState = state;
      break;
  }

  return actualState;
}

// Action Creators

export function changePraca(idPraca) {
  return {
    type: Types.CHANGE_PRACA,
    payload: {
      idPraca
    }
  };
}

export function changeTipoOperacao(idTipoOperacao) {
  return {
    type: Types.CHANGE_TIPO_OPERACAO,
    payload: {
      idTipoOperacao
    }
  };
}

export function changeItemVitrine(idItemVitrine) {
  return {
    type: Types.CHANGEITEMVITRINE,
    payload: {
      idItemVitrine
    }
  };
}

export function changeValorMe(valorMe) {
  return {
    type: Types.CHANGE_VALOR_ME,
    payload: {
      valorMe
    }
  };
}

export function changeValorMn(valorMn) {
  return {
    type: Types.CHANGE_VALOR_MN,
    payload: {
      valorMn
    }
  };
}

export function changeProduto(idProduto) {
  return {
    type: Types.CHANGEPRODUTO,
    payload: {
      idProduto
    }
  };
}

export function setValorInicial(valorMe, valorMn, taxa, siglaMoeda) {
  return {
    type: Types.SET_VALOR_INICIAL,
    payload: {
      valorMe,
      valorMn,
      taxa,
      siglaMoeda
    }
  };
}

export function setIsRecarga(isRecarga) {
  return {
    type: Types.SET_IS_RECARGA,
    payload: {
      isRecarga
    }
  };
}

