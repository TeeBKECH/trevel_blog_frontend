import { toast } from 'react-toastify'

export const notify = (msg, type) => {
  toast(msg, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
    type,
  })
}
