export const serializeFormData = form => {
  const dataObject = {};
  const formData = new FormData(form);

  formData.forEach(function(value, key) {
    dataObject[key] = value;
  });

  const jsonObject = JSON.stringify(dataObject);

  return jsonObject;
};
