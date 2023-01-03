import axios, { AxiosResponse } from 'axios';
import { Album } from '../App';
import { SERVER_URL } from '../config';

axios.defaults.baseURL = SERVER_URL;

export const getCover = async (
  query: string,
): Promise<AxiosResponse<Album[]>> => {
  const keyword = { query: query };
  const gotCover: AxiosResponse<Album[]> = await axios.put(
    `/api/search/cover`,
    keyword,
  );

  return gotCover;
};
