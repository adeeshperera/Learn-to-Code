import { getLinks, saveLinks } from "./feed-manager.mjs"; // 3.2

const feeds = await getLinks();

feeds.push("http://www.google.com/");

await saveLinks(feeds);
