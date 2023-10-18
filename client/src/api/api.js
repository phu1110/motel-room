import axios from 'axios';
import { API_BASE_URL } from './URL';

export const getPost = (hireState,statusState,minPrice,maxPrice,minArea,maxArea,category,isVip,sortBy,isAscending,pageNumber,pageSize) => {
    const queryParams = [
        hireState !== null ? `hireState=${hireState}` : '',
        statusState !== null ?`statusState=${statusState}`: '',
        minPrice !== null ? `minPrice=${minPrice}` : '',
        maxPrice !== null ? `maxPrice=${maxPrice}` : '',
        minArea !== null ? `minArea=${minArea}` : '',
        maxArea !== null ? `maxArea=${maxArea}` : '',
        category !== null ? `category=${category}` : '',
        isVip !== null ?`isVip=${isVip}`: '',
        sortBy !== null ?`sortBy=${sortBy}`: true,
        isAscending !== null ? `isAscending=${isAscending}` : '',
        pageNumber !== null ?`pageNumber=${pageNumber}`: '',
        pageSize !== null ?`pageSize=${pageSize}`: '',
      ];
      const queryString = queryParams.filter(param => param).join('&');
  return axios.get(
    `${API_BASE_URL}/Post/Get-all-post?${queryString}`
  );
};
