import { createClient } from "next-sanity";
  const config = {
      projectId: "upsd5y9w",
      dataset: "production",
      apiVersion: "2021-10-14",
      useCdn: false
  }
  
  export const Client = createClient(config);