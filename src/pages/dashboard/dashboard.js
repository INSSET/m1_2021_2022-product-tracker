import { useEffect, useState } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'
import axios from 'axios'
import Modal from 'react-modal'
import axiosConfig from '../../axiosConfig'
import Cookies from 'js-cookie'
import ProductCard from '../../components/productCard'
import { IoIosAddCircle } from 'react-icons/io'

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
  const [productUrl, setProductUrl] = useState('')
  const [priceLimit, setPriceLimit] = useState(null)
  const [open, setOpen] = useState(false)
  const closeModal = () => setOpen(false)
  const [uuidUser, setUuidUser] = useState(null)
  useEffect(() => {
    const uuid = Cookies.get('uuid')

    async function getProducts() {
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
          fakeDataProducts()
        })
    }
    getProducts()
    //toast.success('Vous êtes connectée')
  }, [])

  const handleAddProduct = async (event) => {
    event.preventDefault()
    setProductUrl(event.target[0].value)
    setPriceLimit(event.target[1].value)
    await axios
      .post('/api/product', {
        key_authentification: JSON.stringify('KEY'),
        productUrl: productUrl,
        priceLimit: priceLimit,
      })
      .then((response) => {
        if (response && response.data) {
          /*
           * Response format accepted : {product: 'product', seller: 'seller', dateAdded: '01/05/2022', website: 'amazon'}
           */
          setProducts((p) => [...p, response.data])
        }
      })
      .catch((err) => {
        toast.error('Erreur de récupération des produits', 'error')
        console.error(`Error: ${err}`)

        // REMOVE THIS -> TESTING ONLY
        setProducts((p) => [
          ...p,
          {
            productId: 1,
            productName: 'Product X',
            priceLimit: 20.99,
            dateAdded: '01/05/2022',
            website: 'aliexpress',
          },
        ])
      })

    closeModal()
    toast.success('Votre produit a été ajouté')
  }

  //  Remove this, used only for testing
  const fakeDataProducts = () => {
    setProducts([
      { productId: 1, productName: 'Product 1', priceLimit: 30.2, dateAdded: '01/05/2022', website: 'amazon' },
      {
        productId: 2,
        productName: 'Product 2',
        priceLimit: 2.11,
        dateAdded: '11/04/2022',
        website: 'aliexpress',
      },
      { productId: 3, productName: 'Product 3', priceLimit: 20.0, dateAdded: '05/01/2020', website: 'amazon' },
      {
        productId: 4,
        productName: 'Product 4',
        priceLimit: 10.0,
        dateAdded: '08/02/2022',
        website: 'aliexpress',
      },
      {
        productId: 5,
        productName: 'Product 5',
        priceLimit: 15.99,
        dateAdded: '10/06/2021',
        website: 'aliexpress',
      },
      { productId: 6, productName: 'Product 6', priceLimit: 15.99, dateAdded: '11/07/2021', website: 'amazon' },
      { productId: 7, productName: 'Product 7', priceLimit: 19.99, dateAdded: '14/06/2022', website: 'amazon' },
    ])
  }

  const PopupAddProduct = () => (
    <Modal style={customStyles} isOpen={open} onRequestClose={closeModal} contentLabel="Ajouter un produit">
      <h3>Ajouter un produit</h3>
      <form className={'popup-add-product p-3'} onSubmit={handleAddProduct}>
        <input
          type="text"
          className={'form-control mb-2'}
          name="product_url"
          id="product_url"
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
