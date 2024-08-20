(async () => {
    const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

    try {
        const response = await fetch('http://localhost:5000/flip-coins?coins=40');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
})();
