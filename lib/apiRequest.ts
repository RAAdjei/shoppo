// import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

type SetLoading = (loading: boolean) => void;
type ResetFunction = () => void;
type RedirectFunction = () => void;

export async function makePostRequest(
  setLoading: SetLoading,
  endpoint: string,
  data: Record<string, unknown>,
  resourceName: string,
  reset: ResetFunction
): Promise<void> {
  try {
    setLoading(true);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    const response = await fetch(`${baseUrl}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setLoading(false);
      toast.success(`New ${resourceName} Created Successfully`);
      reset();
    } else {
      setLoading(false);
      if (response.status === 409) {
        toast.error("The Giving Warehouse Stock is NOT Enough");
      } else {
        toast.error("Something Went wrong");
      }
    }
  } catch (error) {
    setLoading(false);
    console.log(error);
  }
}

export async function makePutRequest(
  setLoading: SetLoading,
  endpoint: string,
  data: Record<string, unknown>,
  resourceName: string,
  redirect: RedirectFunction,
  reset: ResetFunction
): Promise<void> {
  try {
    setLoading(true);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const response = await fetch(`${baseUrl}/${endpoint}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      console.log(response);
      setLoading(false);
      toast.success(`${resourceName} Updated Successfully`);
      redirect();
    } else {
      setLoading(false);
      toast.error("Something Went wrong");
    }
  } catch (error) {
    setLoading(false);
    console.log(error);
  }
}