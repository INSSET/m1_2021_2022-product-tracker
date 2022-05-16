import { useEffect, useState } from 'react'
import WEBSITE_ASSETS from '../constants/websitesAssets'
import { Link } from 'react-router-dom'

export default function Product({ product, seller, dateAdded, website }) {
  const [imgSrcWebsite, setImgSrcWebsite] = useState(null)

  useEffect(() => {
    setImgSrcWebsite(WEBSITE_ASSETS[website])
  }, [website])

  return (
    <>
      <Link to={`/product/${product}`}>
        <div data-product>
          <ul>
            <li>
              <h3>{product}</h3>
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
