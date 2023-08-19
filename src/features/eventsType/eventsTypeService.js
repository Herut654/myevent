import axios from 'axios'
import Wedding from '../../assets/images/Wedding.jpg'
import BarMitzva from '../../assets/images/BarMitzva.jpg'
import Birthday from '../../assets/images/Birthday.jpg'
import Circumcision from '../../assets/images/Circumcision.jpg'
const API_URL = '/api/eventsTypes/'

// Create new eventsType
const createEventsType = async (eventsTypeData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, eventsTypeData, config)

  return response.data
}

// Get user eventsTypes
  const getEventsTypes = async () => {
  // const response = await axios.get(API_URL)
  const response = [
    { id: "1", name: "חתונה", image: Wedding, description: "hello", link: "wedding" },
    { id: "2", name: "בר מצווה", image: BarMitzva, description: "hello", link: "barMitzva" },
    { id: "3", name: "יום הולדת", image: Birthday, description: "hello", link: "birthday" },
    { id: "4", name: "ברית", image: Circumcision, description: "hello", link: "circumcision" },
  ]
  return response
}

// Delete user eventsType
const deleteEventsType = async (eventsTypeId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + eventsTypeId, config)

  return response.data
}

const eventsTypeService = {
  createEventsType,
  getEventsTypes,
  deleteEventsType,
}

export default eventsTypeService