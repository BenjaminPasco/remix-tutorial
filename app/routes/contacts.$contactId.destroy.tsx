import { ActionFunctionArgs, redirect } from "@remix-run/node";
import invariant from "tiny-invariant";
import { deleteContact } from "../data";

export const action = async ({ params, request }: ActionFunctionArgs) => {
  invariant(params.contactId, "Missing contactId");
  await deleteContact(params.contactId);
  return redirect(`/`);
};
