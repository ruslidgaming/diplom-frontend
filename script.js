async function fetchData() {
    const response = await fetch(`http://127.0.0.1:8000/api/`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
    console.log(data);
}

fetchData();