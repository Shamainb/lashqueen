// src/slices.config.js
import * as prismic from "@prismicio/client";
import * as prismicNext from "@prismicio/next";
import config from "./slicemachine.config.json";

export const repositoryName = config.repositoryName;
export const createClient = (config = {}) => {
  const client = prismic.createClient(lashqueen, {
    ...config,
  });

  prismicNext.enableAutoPreviews({ client });

  return client;
};