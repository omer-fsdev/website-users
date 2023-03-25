const getData = () => {
  fetch("https://api.github.com/users")
    .then((resp) => {
      if (!resp.ok) {
        throw new Error("Url error. Sorry bro.");
      }
      return resp.json();
    })
    .then((data) => myPrint(data));
};

const myPrint = (data) => {
  data.forEach((user) => {
    document.querySelector("section").innerHTML += `
        <div class="row my-5">
          <div class='col col-4'>
          <img src=${user.avatar_url} alt='avatar' width='90%' class="rounded" />
          </div>
          <div class='col col-8'>
            <h1 class='mt-4'>Name: <span class='text-danger'>${user.login}</span></h1>
            <h3>Profile: <span>${user.url}</span></h3>
          </div>
        </div>
        
      `;
  });
};

document.querySelector("button").onclick = () => {
  getData();
};
