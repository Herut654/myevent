import axios from 'axios';

const API_URL = '/api/lists/'

// Create new list
const createList = async (listData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, listData, config)

  return response.data
}

// Get user lists
const getLists = async () => {
  // const response = await axios.get(API_URL)
  // const response =  [
  //   [{id: 1, name: "ונישן"},
  //   {id: 2, name: "הרמוניה בגן"},
  //   {id: 3, name: "חצר המלכה"},
  //   {id: 4, name: "טרויה"}],
  //   [
  //     {id: 1, name: "טעם הברכה"},
  //     {id: 2, name: "המנגליסטים"},
  //     {id: 3, name: "אסדו בר"},
  //     {id: 4, name: "מטעמי השף"}
  //   ],
  //   [
  //     {id: 1, name: "המאפרת נועה"},
  //     {id: 2, name: "פני מלאך"},
  //     {id: 3, name: "מייק אפ ארטיסט"},
  //     {id: 4, name: "שיער ואיפור"}
  //   ]

  // ]

  const response = {
    "ulamType": [
      { id: 1, name: "ונישן" },
      { id: 2, name: "הרמוניה בגן" },
      { id: 3, name: "חצר המלכה" },
      { id: 4, name: "טרויה" }],
    "foodType": [
      { id: 1, name: "טעם הברכה"},
      { id: 2, name: "המנגליסטים"},
      { id: 3, name: "אסדו בר"},
      { id: 4, name: "מטעמי השף"}],
    "salonType": [
      { id: 1, name: "המאפרת נועה"},
      { id: 2, name: "פני מלאך"},
      { id: 3, name: "מייק אפ ארטיסט"},
      { id: 4, name: "שיער ואיפור"}],
    "attractionType": [
      { id: 1, name: "זמן חתונה"},
      { id: 2, name: "הפרחת יונים לאירועים"},
      { id: 3, name: "DJ Bitbox"},
      { id: 4, name: "טופ אטרקציה"}],
    "clouthType": [
      { id: 1, name: "זמן חתונה"},
      { id: 2, name: "הפרחת יונים לאירועים"},
      { id: 3, name: "DJ Bitbox"},
      { id: 4, name: "טופ אטרקציה"}],
    "photographerType": [
      { id: 1, name: "יוסי לוי-צלם אירועים"},
      { id: 2, name: "טופ צלמים "},
      { id: 3, name: "event photo"},
      { id: 4, name: "פוטושופ-צילום אירועים "}],
    "placeDesignType": [
      { id: 1, name: "design event"},
      { id: 2, name: "מעצבים לכם אירוע "},
      { id: 3, name: "אתי כהן- שזירת פרחים"},
      { id: 4, name: "דנה עיצובים"}],
    "mohelType": [
       { id: 1, name: "שמואל המוהל "},
       { id: 2, name: "מוהל רפואי מוסמך-אליהו"},
       { id: 3, name: "שלמה רופא מוהל "},
       { id: 4, name: "אורן מוהל מוסמך"}],
    "activeBarType": [
      { id: 1, name: "סינגל בר "},
      { id: 2, name: "ג'וי בר "},
      { id: 3, name: " ג'קיס "},
      { id: 4, name: "בר סרוויס"}],
      
  }
  return response
}

// Delete user list
const deleteList = async (listId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + listId, config)

  return response.data
}

const listService = {
  createList,
  getLists,
  deleteList,
}

export default listService