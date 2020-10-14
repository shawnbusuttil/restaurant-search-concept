import axios from 'axios'

const KEY = 'l2cmhf2ezRl6ZkcHWNYKoDpiaro1zlqUjwkA7nVxnWzryiTwFDk35PJiucoLhjjFY9ECD8GTBGaHBg5yv5YDLiszKQx8EMvm30ply0UWoHQOnYFjLozpYnZOx-UsXXYx'
const PROXY = 'https://cors-anywhere.herokuapp.com'

export default axios.create({
    baseURL: `${PROXY}/https://api.yelp.com/v3/businesses`,
    headers: {
        Authorization: `Bearer ${KEY}`,
    }
})