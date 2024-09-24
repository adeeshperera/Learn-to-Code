import { getLinks, saveLinks } from "./feed-manager.mjs";

const feeds = await getLinks();

feeds.push("http://www.google.com");

await saveLinks(feeds);
