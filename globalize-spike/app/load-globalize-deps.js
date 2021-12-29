const mainLocaleDataUrlTpl =
  "lib/cldr-json/cldr-localenames-full/main/{locale}/languages.json";
const supplementalUrlTpl =
  "/lib/cldr-json/cldr-core/supplemental/{feature}.json";

async function loadMainLocaleData(locale) {
  return fetchJsonFromUrlTemplate(
    mainLocaleDataUrlTpl,
    "locale",
    [locale]
  );
}

async function loadSupplementals(features) {
  return fetchJsonFromUrlTemplate(
    supplementalUrlTpl,
    "feature",
    features
  );
}

async function loadMessagesFor(urlTemplate, locale) {
  const data = await fetch(
    urlTemplate.replace("{locale}", locale)
  );
  return await data.json();
}

async function fetchJsonFromUrlTemplate(
  urlTemplate,
  key,
  replacements
) {
  return Promise.all(
    replacements.map((replacement) =>
      fetch(urlTemplate.replace(`{${key}}`, replacement))
    )
  ).then((response) =>
    Promise.all(response.map((r) => r.json()))
  );
}
