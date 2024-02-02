import FormSubmitButton from "@/components/FormSubmitButton";
import prisma from "@/lib/db/prisma";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export const metadata = {
  title: "Add product ",
};

async function addProduct(formdata: FormData) {
  "use server";

  const session = await getServerSession(authOptions)
  if(!session){
    redirect("/api/auth/signin?callbackUrl=/add-product")
  }

  const name = formdata.get("name")?.toString();
  const description = formdata.get("description")?.toString();
  const imgurl = formdata.get("imageUrl")?.toString();
  const price = Number(formdata.get("price") || 0);

  if (!name || !description || !imgurl || !price) {
    throw Error("Missing required Fields");
  }

  await prisma.product.create({
    data: { name, description, imgurl, price },
  });

  redirect("/");
}

export default async function AddProductPage() {

  const session = await getServerSession(authOptions)
  
  if(!session){
    redirect("/api/auth/signin?callbackUrl=/add-product")
  }

  return (
    <div>
      <h1 className="mb-3 text-2xl font-bold ">Add Product</h1>
      <form action={addProduct}>
        <input
          className="input input-bordered mb-3  max-w-xs "
          required
          name="name"
          placeholder="name"
          type="text"
        />

        <textarea
          name="description"
          placeholder="description"
          className="textarea textarea-bordered mb-3 w-full"
          required
          id=""
        />

        <input
          className="input input-bordered mb-3  max-w-xs "
          required
          name="imageUrl"
          placeholder="img-url"
          type="url"
        />

        <input
          className="input input-bordered mb-3  max-w-xs "
          required
          name="price"
          placeholder="Price"
          type="number"
        />
        <FormSubmitButton className=" btn-block" type="submit">
          Add Product
        </FormSubmitButton>
      </form>
    </div>
  );
}
