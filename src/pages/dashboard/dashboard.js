import { useEffect, useState } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'
import Modal from 'react-modal'
import axiosConfig from '../../axiosConfig'
import Cookies from 'js-cookie'
import ProductCard from '../../components/productCard'
import { IoIosAddCircle } from 'react-icons/io'
import WEBSITE_ASSETS from '../../constants/websitesAssets'

const customStyles = {
  content: {
    height: 'fit-content',
    'max-width': '700px',
    margin: 'auto',
    padding: '20px',
    gap: '10px',
  },
}

export default function Dashboard() {
  const [products, setProducts] = useState([])
  const [open, setOpen] = useState(false)
  const closeModal = () => setOpen(false)

  async function getProducts() {
    const uuid = Cookies.get('uuid')
    await axiosConfig
      .get(`/products?userUUID=${uuid}`, {
        key_authentification: JSON.stringify('KEY'),
      })
      .then((response) => {
        if (response && response.data) {
          /*
           * Response format accepted : [{product: 'product', seller: 'seller', dateAdded: '01/05/2022', website: 'amazon'}, ...]
           */
          setProducts(response.data)
        }
      })
      .catch((err) => {
        toast.error('Erreur de récupération des produits', 'error')
        console.error(`Error: ${err}`)
      })
  }

  useEffect(() => {
    getProducts()
  }, [])

  const handleAddProduct = async (event) => {
    event.preventDefault()

    let productName = event.target['productName'].value
    let productUrl = event.target['productUrl'].value
    let priceLimit = event.target['priceLimit'].value
    let userUUID = Cookies.get('uuid')

    let domain

    if (productUrl) {
      domain = new URL(productUrl)
      domain = domain.hostname
      domain = domain.replace('www.', '')
      domain = domain.split('.')[0]
    }

    if (productName && productUrl && priceLimit && domain && WEBSITE_ASSETS[domain] != null) {
      await axiosConfig
        .post('add-product', {
          productName: productName,
          productUrl: productUrl,
          priceLimit: priceLimit,
          website: domain,
          userUUID: userUUID,
        })
        .then((response) => {
          if (response) {
            getProducts()
            toast.success('Votre produit a été ajouté')
          }
        })
        .catch((err) => {
          toast.error('Erreur de récupération des produits', 'error')
          console.error(`Error: ${err}`)
        })

      closeModal()
    } else {
      toast.warn('Erreur sur les informations saisies ou le site nest pas reférencé', 'warning')
    }
  }

  const PopupAddProduct = () => (
    <Modal style={customStyles} isOpen={open} onRequestClose={closeModal} contentLabel="Ajouter un produit">
      <h3>Ajouter un produit</h3>
      <form className={'popup-add-product p-3'} onSubmit={handleAddProduct}>
        <input
          type="text"
          className={'form-control mb-2'}
          name="productName"
          id="productName"
          placeholder="Nom du produit"
          required
        />

        <input
          type="text"
          className={'form-control mb-2'}
          name="productUrl"
          id="productUrl"
          placeholder="https://www.amazon.fr/Apple-iPhone-13-128-Go-Comprend-EarPods/dp/B09G9171GV?th=1"
          required
        />

        <input
          type="number"
          step="0.01"
          className={'form-control mb-2'}
          name="priceLimit"
          id="priceLimit"
          placeholder="Exemple : 15.99"
          min="0.01"
          required
        />
        <button className="btn btn-primary" type="submit">
          Ajouter le produit
        </button>
      </form>
    </Modal>
  )

  return (
    <>
      <div data-dashboard className={'container mt-5'}>
        <h1>Tableau de bord</h1>
        <div className="page-content">
          <div className="card-group">
            {Array.isArray(products) && products.length > 0 ? (
              products.map((product, index) => (
                <ProductCard
                  key={index}
                  productId={product.product_id}
                  productName={product.product_name}
                  priceLimit={product.price_limit}
                  dateAdded={new Date(product.date_added).toLocaleDateString()}
                  website={product.website}
                />
              ))
            ) : (
              <div className="text-center p-5">Aucun produit</div>
            )}
          </div>
          <div className="add-product">
            <button id="#button-add-product" onClick={() => setOpen((o) => !o)}>
              <IoIosAddCircle />
            </button>
            <PopupAddProduct />
          </div>
        </div>
      </div>
    </>
  )
}
