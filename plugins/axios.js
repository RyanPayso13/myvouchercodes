export default function({ $axios, redirect }) {
  $axios.onError((config) => {
    redirect('/error')
  })
}
