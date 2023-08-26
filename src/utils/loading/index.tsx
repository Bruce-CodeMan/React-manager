
import ReactDom from "react-dom/client"
import Loading from "./loading"

export const showLoading = () => {
    const loading = document.createElement('div')
    loading.setAttribute('id', 'loading')
    ReactDom.createRoot(loading).render(<Loading />)
}