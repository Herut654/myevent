import axios from 'axios'

const API_URL = '/api/recommends/'

// Create new recommend
const createRecommend = async (recommendData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, recommendData, config)

  return response.data
}

// Get user recommends
  const getRecommends = async () => {
  // const response = await axios.get(API_URL)
  const response = [
    {id:1, name: "משה", eventName: "החתונה הכי טוה בעיר", date: "20.11.2022"},
    {id:2, name: "ליטל", eventName: "הכי כייף לעשות בת מצווה", date: "14.5.2020"},
    {id:3, name: "מיקי", eventName: "אין כמו להתגרש", date: "6.8.2021"},
  ]
  return response
}

// Delete user recommend
const deleteRecommend = async (recommendId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + recommendId, config)

  return response.data
}

const recommendService = {
  createRecommend,
  getRecommends,
  deleteRecommend,
}

export default recommendService