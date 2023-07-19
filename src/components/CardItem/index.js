// Write your code here.
import './index.css'

const CardList = props => {
  const {bannerList} = props
  const {headerText, className, description, imgUrl } = bannerList
  return (
    <li className={`${className} card-item`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <img src={imgUrl} className="image" alt="image"/>
      </div>
    </li>
  )
}
export default CardList
