fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(API => {
        API.forEach(item => {
            let box = document.createElement("div");
            let NewText = document.createElement("h2");
            let UserName = document.createElement("p");
            let email = document.createElement("p")
            let street = document.createElement("p")


            box.className = "card";

            NewText.textContent = item.name;
            UserName.textContent = item.username;
            email.textContent = item.email;
            street.textContent = item.address.street;

            box.append(NewText, UserName, email, street,);
            document.body.appendChild(box);
        });
    });
