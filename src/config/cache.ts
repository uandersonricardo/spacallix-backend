import NodeCache from "node-cache";

const cache = new NodeCache({ stdTTL: 1800 });

export default cache;
