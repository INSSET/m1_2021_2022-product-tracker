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
  const [typeChart, setTypeChart] = useState(null)

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
    setTypeChart('area')
  }, [idProduct])

  //  Remove this, used only for testing
  const fakeDataProducts = () => {
    setProduct({
      productName: 'Raspberry Pi 4 B 8 Go 4 x 1,5 GHz, Processeur ARM Cortex-A72',
      priceLimit: 269.0,
      dateAdded: '01/05/2022',
      website: 'amazon',
      prices: [
        { price: 289.0, date: '2022-01-02' },
        { price: 269.0, date: '2022-01-03' },
        { price: 259.0, date: '2022-01-04' },
        { price: 279.59, date: '2022-01-05' },
        { price: 279.0, date: '2022-01-06' },
        { price: 286.2, date: '2022-01-07' },
        { price: 289.0, date: '2022-01-08' },
        { price: 279.0, date: '2022-01-09' },
        { price: 275.0, date: '2022-01-10' },
        { price: 279.0, date: '2022-01-11' },
        { price: 279.0, date: '2022-01-12' },
        { price: 286.0, date: '2022-01-13' },
        { price: 279.0, date: '2022-01-14' },
        { price: 286.2, date: '2022-01-15' },
        { price: 286.2, date: '2022-01-16' },
        { price: 286.2, date: '2022-01-17' },
        { price: 289.0, date: '2022-01-18' },
        { price: 279.0, date: '2022-01-19' },
        { price: 275.0, date: '2022-01-20' },
        { price: 279.0, date: '2022-01-21' },
        { price: 279.0, date: '2022-01-22' },
        { price: 286.0, date: '2022-01-23' },
        { price: 286.0, date: '2022-01-24' },
        { price: 286.0, date: '2022-01-25' },
        { price: 279.0, date: '2022-01-26' },
        { price: 286.2, date: '2022-01-27' },
        { price: 289.0, date: '2022-01-28' },
        { price: 279.0, date: '2022-01-29' },
        { price: 275.0, date: '2022-01-30' },
        { price: 279.0, date: '2022-01-31' },
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
        axisX: {
          valueFormatString: 'DD-MMM',
        },
        axisY: {
          valueFormatString: '# €',
          stripLines: [
            {
              label: `Limite de prix : ${product.priceLimit} €`,
              startValue: product.priceLimit - 0.1,
              endValue: product.priceLimit + 0.1,
              color: 'red',
            },
          ],
        },
        data: [
          {
            type: typeChart,

            dataPoints: prices,
          },
        ],
      })
    }
  }, [product, typeChart])

  const onChangeRadioValue = (event) => {
    setTypeChart(event.target.value)
  }

  return (
    <>
      <div data-product className={'container mt-5'}>
        <h1>Vue détaillée</h1>
        <div className="page-content mb-5">
          {product ? (
            <div className="mb-2">
              <p className="product-name">{product.productName}</p>
              <p className="product-date-added">Date d'ajout : {product.dateAdded}</p>
              <p className="product-first-price">Prix enregistré à l'ajout : {product.prices[0].price} €</p>
              <p className="product-price-limit">Prix d'alerte : {product.priceLimit} €</p>
              <div onChange={onChangeRadioValue} className="radio-type-charts">
                <div>
                  <input type="radio" value="area" name="gender" id="area" defaultChecked />{' '}
                  <label htmlFor="area">Aire</label>
                </div>
                <div>
                  <input type="radio" value="line" name="gender" id="line" /> <label htmlFor="line">Ligne</label>
                </div>
                <div>
                  <input type="radio" value="column" name="gender" id="column" />{' '}
                  <label htmlFor="column">Colonnes</label>
                </div>
                <div>
                  <input type="radio" value="pie" name="gender" id="pie" /> <label htmlFor="pie">Camembert</label>
                </div>
              </div>
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
