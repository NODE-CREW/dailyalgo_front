import { createHttpCilent } from "src/lib/http-client";

import type { NotificationList, NotificationListReq } from "src/types/notification";
import { API_NOTIFICATION, API_NOTIFICATION_ITEM } from "../contants";

const instance = createHttpCilent()
  .setBaseUrl(process.env.NEXT_PUBLIC_API_URL ?? "")
  .build();

export const fetchNotificationList = (
  requestBody: NotificationListReq
): Promise<NotificationList> => {
  return instance.get(API_NOTIFICATION, { params: requestBody });
};

export const fetchNotificationItem = (id: number): Promise<any> => {
  return instance.get(API_NOTIFICATION_ITEM(id));
};
