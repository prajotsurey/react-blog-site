import axios from 'axios'
import token from '../utils/token';

const baseUrl = '/api/users'
const createUser = async (credentials) => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}

const getUserById = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`)
  return response.data
}

const getUser = async () => {
  const config = { 
    headers: {  Authorization : token.token },
  }
  const response = await axios.get(`${baseUrl}`,config)
  return response.data
}

const getUserByHandle = async (handle) => {
  const response = await axios.get(`${baseUrl}/handle/${handle}`)
  return response.data
}

const clearBookmarks = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}/clearBookmarks`)
  console.log(response)
  return response.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { createUser, getUser, clearBookmarks,  getUserByHandle, getUserById }