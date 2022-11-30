/**
 * Summary: Parses the given url with the given format and returns an object with the parsed values.
 * @param {String} fullUrl The url to parse.
 * @param {String} urlFormatString The format string to parse the url. Variable parts starts with ":" (ex: "/:version/api/:collection/:id"). Url parameters are also parsed.
 * @returns {Object} An object with the parsed values.
 */
function parseUrlByUrlFormat(fullUrl, urlFormatString) {
  try {
    if (!fullUrl.includes("/")) {
      throw new Error("Must be a valid url");
    }
    if (!urlFormatString.includes("/")) {
      throw new Error("Must be a valid url format string");
    }

    const parsedUrl = {};
    const valueIsNotEmpty = (value) => value !== "";

    const [url, extra] = fullUrl.trim().split("?").filter(valueIsNotEmpty);

    const extraParams = new URLSearchParams(extra);
    extraParams.forEach((value, key) => {
      parsedUrl[key.trim()] = value.trim();
    });

    const urlFormatStringSplitted = urlFormatString
      .split("/")
      .filter(valueIsNotEmpty);

    const urlSplitted = url.split("/").filter(valueIsNotEmpty);

    if (urlFormatStringSplitted.length !== urlSplitted.length) {
      throw new Error(
        "Url format and url must have the same number of segments"
      );
    }

    // search the variables parts of the urlFormatString and match them with the url
    urlFormatStringSplitted.forEach((item, index) => {
      if (item.startsWith(":")) {
        const key = item.slice(1).trim();
        const value = urlSplitted[index] || "";

        if (parsedUrl[key] !== undefined) {
          parsedUrl[key] = [parsedUrl[key], value.trim()];
        } else {
          parsedUrl[key] = value.trim();
        }
      }
    });

    return parsedUrl;
  } catch (error) {
    console.error(error);
    return { error: error.message };
  }
}

export default parseUrlByUrlFormat;
