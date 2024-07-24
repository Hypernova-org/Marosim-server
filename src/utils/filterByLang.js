const filterByLang = (items = [], lang, ...fields) => {
  try {
    if(!lang) {
      return {
        error: "Language is required.",
      };
    }
    const langSuffix =
      lang.charAt(0).toUpperCase() + lang.slice(1).toLowerCase().trim();
    const result = [];
    for (let item of items) {
      let newItem = { ...(item._doc || item) };
      for (let field of fields) {
        let fieldPath = field.split(".");
        let currentValue = newItem;
        for (let i = 0; i < fieldPath.length - 1; i++) {
          currentValue = currentValue[fieldPath[i]];
          if (currentValue === undefined) {
            break;
          }
        }
        if (currentValue !== undefined) {
          const lastKey = fieldPath[fieldPath.length - 1];
          currentValue[lastKey] =
            currentValue[`${lastKey}${langSuffix}`] || currentValue[lastKey];
        }
      }
      result.push(newItem);
    }
    return result;
  } catch (err) {
    return {
      message: err,
      error: "Error in filtering by language.",
    };
  }
};

module.exports = filterByLang;
