import { useEffect, useState } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'
import axiosConfig from '../../axiosConfig'
import { useParams } from 'react-router-dom'
import CanvasJSReact from '../../canvasjs/canvasjs.react'
var CanvasJSChart = CanvasJSReact.CanvasJSChart

export default function Product() {
  //   const [productUrl, setProductUrl] = useState('')
  //const [priceLimit, setPriceLimit] = useState(null)
  const [product, setProduct] = useState(null)
  const { idProduct } = useParams()
  const [options, setOptions] = useState(null)

  useEffect(() => {
    async function getDetailProduct() {
      await axiosConfig
        .get(`/product/${idProduct}`)
        .then((response) => {
          if (response && response.data) {
            /*
             * Response format accepted :
             * {
             * product_name: 'string',
             * price_limit: float,
             * date_added: date,
             * website: 'string',
             * prices: [
             *   { price: float, date: date },
             *   { price: float, date: '02/05/2022' },
             *   ...
             * ]},
             */
            setProduct(response.data.datas)
          }
        })
        .catch((err) => {
          toast.error('Erreur de récupération des informations du produit', 'error')
          console.error(`Error: ${err}`)
          fakeDataProducts()
        })
    }
    if (idProduct) {
      getDetailProduct()
    } else {
      toast.error("Le produit n'a pas pu être identifié", 'error')
    }
    //toast.success('Vous êtes connectée')
  }, [idProduct])

  //  Remove this, used only for testing
  const fakeDataProducts = () => {
    setProduct({
      productName: 'Raspberry Pi 4 B 8 Go 4 x 1,5 GHz, Processeur ARM Cortex-A72',
      priceLimit: 249.0,
      dateAdded: '01/05/2022',
      website: 'amazon',
      prices: [
        { price: 249.0, date: '01/05/2022' },
        { price: 269.0, date: '02/05/2022' },
        { price: 259.0, date: '03/05/2022' },
        { price: 279.0, date: '04/05/2022' },
        { price: 279.0, date: '05/05/2022' },
        { price: 286.0, date: '06/05/2022' },
      ],
    })
  }

  useEffect(() => {
    if (product && product.prices && product.prices.length > 0) {
      const prices = product.prices.map((price) => {
        return {
          x: new Date(price.date),
          y: price.price,
        }
      })
      setOptions({
        title: {
          text: `Évolution du prix depuis le ${product.dateAdded}`,
        },
        data: [
          {
            type: 'line',
            dataPoints: prices,
          },
        ],
      })
    }
  }, [product])

  return (
    <>
      <div data-product className={'container mt-5'}>
        <h1>Vue détaillée</h1>
        <div className="page-content mb-5">
          {product ? (
            <div className="mb-2">
              <p class="product-name">{product.productName}</p>
              <p class="product-date-added">Date d'ajout : {product.dateAdded}</p>
              <p class="product-first-price">Prix enregistré à l'ajout : {product.firstPrice} €</p>
              <p class="product-price-limit">Prix d'alerte : {product.priceLimit} €</p>
              <CanvasJSChart options={options} />
            </div>
          ) : (
            <div className="text-center p-5">Aucun produit trouvé</div>
          )}
        </div>
      </div>
    </>
  )
}
