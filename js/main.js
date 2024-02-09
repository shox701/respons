const getOrderlist = document.querySelector(".order-list");

async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        
        for (let i = 0; i < 20; i++) {
            const listItem = document.createElement("li");
            listItem.textContent = data[i].title; 
            getOrderlist.appendChild(listItem);
        }
    } catch(error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();