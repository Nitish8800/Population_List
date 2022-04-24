const ADD_CITY = "ADD_CITY"
const DELETE_CITY = "DELETE_CITY"

const addCity = (payload) => {
    return {
        type: ADD_CITY,
        payload
    }
}

const deleteCity = (payload) => {
    return {
        type: DELETE_CITY,
        payload
    }
}