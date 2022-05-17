import { useEffect, useState } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'
import ProductCard from '../../components/productCard'
import { IoIosAddCircle } from 'react-icons/io'
import axios from 'axios'
import Modal from 'react-modal'
import axiosConfig from '../../axiosConfig'

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

  useEffect(() => {
    async function getProducts() {
      await axiosConfig
        .get('/products', {
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
          { product: 'Product X', seller: 'seller xxx', dateAdded: '01/05/2022', website: 'aliexpress' },
        ])
      })

    closeModal()
    toast.success('Votre produit a été ajouté')
  }

  //  Remove this, used only for testing
  const fakeDataProducts = () => {
    setProducts([
      { product_id: 1, product_name: 'Product 1', seller: 'Seller 1', dateAdded: '01/05/2022', website: 'amazon' },
      { product_id: 2, product_name: 'Product 2', seller: 'Seller 2', dateAdded: '11/04/2022', website: 'aliexpress' },
      { product_id: 3, product_name: 'Product 3', seller: 'Seller 3', dateAdded: '05/01/2020', website: 'amazon' },
      { product_id: 4, product_name: 'Product 4', seller: 'Seller 4', dateAdded: '08/02/2022', website: 'aliexpress' },
      { product_id: 5, product_name: 'Product 5', seller: 'Seller 5', dateAdded: '10/06/2021', website: 'aliexpress' },
      { product_id: 6, product_name: 'Product 6', seller: 'Seller 6', dateAdded: '11/07/2021', website: 'amazon' },
      { product_id: 7, product_name: 'Product 7', seller: 'Seller 7', dateAdded: '14/06/2022', website: 'amazon' },
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
          name="price_limit"
          id="price_limit"
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
                  product_id={product.product_id}
                  product_name={product.product_name}
                  seller={product.seller}
                  dateAdded={product.dateAdded}
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
