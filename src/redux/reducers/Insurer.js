import axios from 'axios'

export const Types = {
  POST_LIFE: 'insurer/POST_LIFE',
  POST_TRIP: 'insurer/POST_TRIP',
  GET_INSURER: 'insurer/GET_INSURER',
  

}

export const Creators = {
  getInsurer: (id = 1) => {
    const response = axios(`http://10.212.0.152:3000/insurance/${id}`)
    return {
      type: Types.GET_INSURER,
      payload: response,
    }
  },
  postLife: (name, cpf, sexo, dataNascimento, profissao, renda, uf, influencerName) => {
    const response = axios.post(`http://10.212.0.152:3000/new_quote/type/seguro-de-vida`, {
      "data": {"proponente": {
            "tipoRelacaoSeguradoId": 1,
            "nome": name,
            "cpf": cpf,
            "dataNascimento": dataNascimento,
            "profissaoCbo": "2410-05",
            "renda": renda,
            "sexoId": 1,
            "uf": uf,
            "declaracaoIRId": 1
          }},
      "influencer_name": "Vanesso Pudinic"     
    })
    return {
      type: Types.POST_LIFE,
      payload: response,
    }
  },
  postTrip: () => {
    const response = axios.post(`http://10.212.0.152:3000/new_quote/type/seguro-viagem` ,{ 
      "data": {
          "destinos": [
              "BR"
          ],
          "passageiros": [
              {
                  "nome": "Isabella",
                  "dataNascimento": "11-02-1998"
              }
          ],
          "dataSaida": "2019-08-10",
          "dataRetorno": "2019-08-19",
          "tipoViagem": 1,
          "tipoTarifa": 1
      },
      "influencer_name": "Vanesso Pudinic"
    })
    return {
      type: Types.POST_TRIP,
      payload: response,
    }
  },
}

const INITIAL_STATE = {
  postTripData: null,
  postLifeData: null,
  specificInsurerData: null,
}

export default function Insurer(state = INITIAL_STATE, action) {
  
  switch (action.type) {
    case Types.POST_TRIP: 
      return {
        ...state,
        postTripData: action.payload.data
      }
      return state;
    break;

    case Types.POST_LIFE: 
    console.log("Insurer POST_LIFE", action.payload.data)
    return {
      ...state,
      postLifeData: action.payload.data
    }
    break;

    case Types.GET_INSURER: 
    console.log("Insurer GET_INSURER", action.payload.data)
    return {
      ...state,
      specificInsurerData: action.payload.data
    }
    break;
    
    default:
      return state
      break
  }
}