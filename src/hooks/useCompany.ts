import { useQuery } from "react-query";
import axios from "axios";

export type Data = {
  id: number;
  name: string;
  organization: string;
  mobilenumber: string;
  homephone: string;
  officenumber: string;
  email: string;
  image: string;
  user_id: number;
  created_at: string;
  updated_at: string;
};

export const useAddCompany = () => {
  return useQuery<Data[], { message: string }>(
    "todos",
    () =>
      axios
        .get<Data[]>(
          "https://test-frontend-api.nayoo.co/api/Nayoo/1701/index",
          {}
        )
        .then((res) => res.data),
    {}
  );
};
