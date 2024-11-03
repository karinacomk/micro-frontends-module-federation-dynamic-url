import header from "../remotes/header";
import content from "../remotes/content";

// definindo url no scope global do js
window[header.urlGlobalVariable] = header.url;
window[content.urlGlobalVariable] = content.url;

import("./bootstrap");
