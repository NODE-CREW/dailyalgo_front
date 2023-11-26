import { createHttpCilent } from "src/lib/http-client";
import type { OrganizationInfo } from "src/types/organization";
import { API_SEARCH_ORGANIZATION } from "../contants";

const instance = createHttpCilent()
  .setBaseUrl(process.env.NEXT_PUBLIC_API_URL ?? "")
  .build();

export const fetchOrganizationSearch = (code: string): Promise<OrganizationInfo> => {
  return instance.get(API_SEARCH_ORGANIZATION, { params: { code } });
};
