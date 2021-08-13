import gifData from '../../data/gifData'
import './Gif.css'

const Gif = () => {
  return (
    <div>
      <ul>
        {gifData.map(gif => (gif.rating === 'g' &&
          <li><img key={gif.id} src={gif.url} alt={gif.title}/></li>
        ))}
      </ul>
    </div>
  )
}

export default Gif
