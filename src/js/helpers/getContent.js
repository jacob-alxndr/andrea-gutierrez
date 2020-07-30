// 1. Imports
import Prismic from "prismic-javascript";
// import PrismicDOM from "prismic-dom";

// 2. Selectors
const apiEndpoint =
  "https://andrea-gutierrez-photography.cdn.prismic.io/api/v2";

// 3. Actions
function handleError(err) {
  console.log("ohhh noooo");
  alert(err);
}
async function getContent() {
  const promise = await Prismic.getApi(apiEndpoint).catch(handleError);
  const res = await promise.query("");
  const data = await res.results;
  return data;
}

// 4. Exports
export { handleError, getContent };
