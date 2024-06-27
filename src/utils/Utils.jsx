import { useState, useEffect } from 'react'

export const GetPath = () => {
  const path = window.location.pathname
  const pathnameArray = path.split('/')
  const temp = pathnameArray[1]
  return temp.charAt(0).toUpperCase() + temp.slice(1)
}

export const formatPrice = (price) => {
  const priceArray = price.toString().split('').reverse()
  const formattedPrice = priceArray.map((digit, index) => {
    if (index !== 0 && index % 3 === 0) {
      return digit + ','
    } else {
      return digit
    }
  }).reverse().join('') + '원'

  return formattedPrice
}

export const formatDistance = (distance) => {
  return Math.round(distance * 10) / 10 + 'km'
}

export const useGeoLocation = () => {
  const [location, setLocation] = useState()
  const [error, setError] = useState('')
  const options = {
    enableHighAccuracy: true,
    timeout: 1000 * 10,
    maximumAge: 1000 * 3600 * 24,
  }

  const handleSuccess = (pos) => {
    const { latitude, longitude } = pos.coords

    setLocation({ latitude, longitude })
  }

  const handleError = (err) => {
    setError(err.message)
  }

  useEffect(() => {
    const { geolocation } = navigator

    if (!geolocation) {
      setError('Geolocation is not supported.')
      return
    }

    geolocation.getCurrentPosition(handleSuccess, handleError, options)
  }, [])

  return { location, error }
}