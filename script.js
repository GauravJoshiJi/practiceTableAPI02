fetch("https://dummyjson.com/products")
  .then((data) => {
    return data.json();
  })
  .then((objectData) => {
    return objectData.products;
  })
  .then((productsData) => {
    let products = "";

    productsData.map((values, key) => {
      var rating = Math.round(values.rating);
      var starRating;
      switch (rating) {
        case 1:
          starRating = "⭐";
          break;
        case 2:
          starRating = "⭐⭐";
          break;
        case 3:
          starRating = "⭐⭐⭐";
          break;
        case 4:
          starRating = "⭐⭐⭐⭐";
          break;
        default:
          starRating = "⭐⭐⭐⭐⭐";
      }

      products += `
      <tr>
      <td>${key + 1}</td>
      <td>${values.title}</td>
      <td>${values.description}</td>
      <td>${values.price}</td>
      <td>${starRating}</td>
      <td><img src="${values.thumbnail}" /></td>
    </tr>`;
    });

    document.getElementById("table_body").innerHTML = products;
  });
