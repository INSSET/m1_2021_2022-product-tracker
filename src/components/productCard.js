import { useEffect, useState } from 'react'
import WEBSITE_ASSETS from '../constants/websitesAssets'
import { Link } from 'react-router-dom'

export default function ProductCard({ product_id, product_name, seller, dateAdded, website }) {
  const [imgSrcWebsite, setImgSrcWebsite] = useState(null)

  useEffect(() => {
    setImgSrcWebsite(WEBSITE_ASSETS[website])
  }, [website])

  return (
    <>
      <Link to={`/product/${product_id}`}>
        <div data-product-card>
          <ul>
            <li>
              <h3>{product_name}</h3>
            </li>
            <li>
              <span>Vendeur : {seller}</span>
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
