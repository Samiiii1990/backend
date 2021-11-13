async function postData() {
  async function postFormDataAsJson({ url, formData }) {
    const plainFormData = Object.fromEntries(formData.entries());
    const formDataJsonString = JSON.stringify(plainFormData);

    const fetchOptions = {
      method: "POST",
      headers: {
        "Access-Control-Allow-Headers": "Content-Type",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        "Access-Control-Allow-Origin":
          "http://127.0.0.1:5500/Handlebars/index.html",
        "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token'",
      },
      body: formDataJsonString,
    };

    const response = await fetch(url, fetchOptions);

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(errorMessage);
    }

    return response.json();
  }

  async function handleFormSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    console.log("🚀 ~ file: main.js ~ line 31 ~ handleFormSubmit ~ form", form);
    const url = form.action;
    console.log("🚀 ~ file: main.js ~ line 33 ~ handleFormSubmit ~ url", url);

    try {
      const formData = new FormData(form);
      const responseData = await postFormDataAsJson({ url, formData });

      console.log({ responseData });
    } catch (error) {
      console.error(error);
    }
  }

  const exampleForm = document.getElementById("form");
  exampleForm.addEventListener("submit", handleFormSubmit);
}
