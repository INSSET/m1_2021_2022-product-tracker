import { useEffect, useState } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'
import axiosConfig from '../../axiosConfig'
import { useParams } from 'react-router-dom'
import CanvasJSReact from '../../canvasjs/canvasjs.react'
import dateFormat from 'dateformat'

var CanvasJSChart = CanvasJSReact.CanvasJSChart

export default function Product() {
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
            setProduct(response.data)
          }
        })
        .catch((err) => {
          toast.error('Erreur de récupération des informations du produit', 'error')
          console.error(`Error: ${err}`)
        })
    }
    if (idProduct) {
      getDetailProduct()
    } else {
      toast.error("Le produit n'a pas pu être identifié", 'error')
    }
    setTypeChart('area')
  }, [idProduct])

  useEffect(() => {
    if (product && product.prices && product.prices.length > 0) {
      const prices = product.prices.map((price) => {
        const date = new Date(price.date)
        return {
          x: new Date(dateFormat(date, 'yyyy-mm-dd')),
          y: parseFloat(price.price),
        }
      })
      setOptions({
        title: {
          text: `Évolution du prix depuis le ${new Date(product.date_added).toLocaleDateString()}`,
        },
        axisX: {
          valueFormatString: 'DD-MMM',
        },
        axisY: {
          valueFormatString: '# €',
          stripLines: [
            {
              label: `Limite de prix : ${product.price_limit} €`,
              startValue: parseFloat(product.price_limit - 0.1),
              endValue: parseFloat(product.price_limit + 0.1),
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
              <p className="product-name">{product.product_name}</p>
              <p className="product-date-added">Date d'ajout : {new Date(product.date_added).toLocaleDateString()}</p>
              <p className="product-first-price">Prix enregistré à l'ajout : {product.prices[0].price} €</p>
              <p className="product-price-limit">Prix d'alerte : {product.price_limit} €</p>
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
