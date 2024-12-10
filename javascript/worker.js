setInterval(() => {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    const dateString = now.toLocaleDateString();
    postMessage(`${timeString} - ${dateString}`);
}, 1000); 