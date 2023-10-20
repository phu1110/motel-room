import axios from 'axios';
import { API_BASE_URL } from './URL';

export const getPost = (hireState,statusState,minPrice,maxPrice,minArea,maxArea,category,isVip,sortBy,isAscending,pageNumber,pageSize) => {
  const queryParams = [];
  if (hireState !== null && hireState !== undefined) {
    queryParams.push(`hireState=${hireState}`);
  }

  if (statusState !== null && statusState !== undefined) {
    queryParams.push(`statusState=${statusState}`);
  }

  if (minPrice !== null && minPrice !== undefined) {
    queryParams.push(`minPrice=${minPrice}`);
  }

  if (maxPrice !== null && maxPrice !== undefined) {
    queryParams.push(`maxPrice=${maxPrice}`);
  }

  if (minArea !== null && minArea !== undefined) {
    queryParams.push(`minArea=${minArea}`);
  }

  if (maxArea !== null && maxArea !== undefined) {
    queryParams.push(`maxArea=${maxArea}`);
  }

  if (category !== null && category !== undefined) {
    queryParams.push(`category=${category}`);
  }

  if (isVip !== null && isVip !== undefined) {
    queryParams.push(`isVip=${isVip}`);
  }

  if (sortBy !== null && sortBy !== undefined) {
    queryParams.push(`sortBy=${sortBy}`);
  }

  if (isAscending !== null && isAscending !== undefined) {
    queryParams.push(`isAscending=${isAscending}`);
  }

  if (pageNumber !== null && pageNumber !== undefined) {
    queryParams.push(`pageNumber=${pageNumber}`);
  }

  if (pageSize !== null && pageSize !== undefined) {
    queryParams.push(`pageSize=${pageSize}`);
  }
  const queryString = queryParams.join('&');
  return axios.get(
    `${API_BASE_URL}/Post/Get-all-post?${queryString}`
  );
};