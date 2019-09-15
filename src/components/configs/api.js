import axios from 'axios'

const getCsrf = () => {
  const metas = document.getElementsByTagName('meta')
  for (var i = 0; i < metas.length; i++) {
    if (metas[i].getAttribute('name') == 'csrf-token') {
      return metas[i].getAttribute('content')
    }
  }
  return ''
}

const csrf = getCsrf()

const api = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'X-CSRF-Token': csrf,
  },
})

export default api
