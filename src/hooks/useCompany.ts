import { useMutation, useQuery, useQueryClient } from "react-query";
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

export const useGetCompany = () => {
  return useQuery<Data[]>(
    "com",
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

export function useAddCompany() {
  const queryClient = useQueryClient();
  return useMutation(
    (data) =>
      axios.post(
        `https://test-frontend-api.nayoo.co/api/Nayoo/1701/store`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      ),
    { onSuccess: () => queryClient.invalidateQueries("com") }
  );
}

export function useDeleteCompany() {
  const queryClient = useQueryClient();
  return useMutation(
    (data) =>
      axios.delete(
        `https://test-frontend-api.nayoo.co/api/Nayoo/1701/destroy/${data}`
      ),
    { onSuccess: () => queryClient.invalidateQueries("com") }
  );
}

export function useUpdateCompany(id: number) {
  const queryClient = useQueryClient();
  return useMutation(
    (data) =>
      axios.put(
        `https://test-frontend-api.nayoo.co/api/Nayoo/1701/update/${id}`,
        data,
        {
          headers: {
            'Content-Type': 'application/json'
          },
        }
      ),
    { onSuccess: () => queryClient.invalidateQueries("com") }
  );
}


