import axios from 'axios';
import eventHall from '../../assets/images/eventHall.jpg'
import catering from '../../assets/images/catering.jpg'
import attractionAndDJ from '../../assets/images/attractionAndDJ.jpg'
import weddingClouth from '../../assets/images/weddingClouth.jpg'
import photographer from '../../assets/images/photographer.jpg'
import beautySalon from '../../assets/images/beautySalon.jpg'

const API_URL = '/api/suppliers/'

// Create new supplier
const createSupplier = async (supplierData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, supplierData, config)

  return response.data
}

// Get user suppliers
  const getSuppliers = async () => {
  // const response = await axios.get(API_URL)
  const response = [
    { id: "1", name: "אולם אירועים", link: "ulamType", image: eventHall, description: "התקשרו אלינו כדי למצוא את אולם האירועים המתאים ביותר לאירוע שלכם" },
    { id: "2", name: "קייטרינג", link: "foodType", image: catering, description: "התקשרו אלינו כדי למצוא את הקייטרינג הטוב ביותר לאירוע שלכם"  },
    { id: "3", name: "אטרקציות ודיג'יי", link: "attractionType", image: attractionAndDJ, description: "Call us to find the best attraction and DJ for your event"  },
    { id: "4", name: "לבוש לאירוע", link: "clouthType", image: weddingClouth, description: "התקשרו אלינו כדי למצוא את האאוטפיט הטוב ביותר לאירוע שלכם"  },
    { id: "5", name: "צלם", link: "photographerType", image: photographer, description: "התקשרו אלינו כדי למצוא את הצלם הטוב ביותר לאירוע שלכם"  },
    { id: "6", name: "סלון יופי", link: "salonType", image: beautySalon, description: "התקשרו אלינו כדי למצוא את סלון היופי הטוב ביותר לאירוע שלכם"  },
]
  return response
}

// Delete user supplier
const deleteSupplier = async (supplierId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + supplierId, config)

  return response.data
}

const supplierService = {
  createSupplier,
  getSuppliers,
  deleteSupplier,
}

export default supplierService