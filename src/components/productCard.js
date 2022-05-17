import { useEffect, useState } from 'react'
import WEBSITE_ASSETS from '../constants/websitesAssets'
import { Link } from 'react-router-dom'

export default function ProductCard({ productId, productName, priceLimit, dateAdded, website }) {
  const [imgSrcWebsite, setImgSrcWebsite] = useState(null)

  useEffect(() => {
    setImgSrcWebsite(WEBSITE_ASSETS[website])
  }, [website])

  return (
    <>
      <Link to={`/product/${productId}`}>
        <div data-product-card>
          <ul>
            <li>
              <h3>{productName}</h3>
            </li>
            <li>
              <span>Prix d'alerte : {priceLimit.toFixed(2)} €</span>
            </li>
            <li>
              <span>Ajouté le : {dateAdded}</span>
            </li>
          </ul>
          <div className="website-img-container">
            {website && <img className="website-img" src={imgSrcWebsite} alt="website" />}
          </div>
        </div>
      </Link>
    </>
  )
}
