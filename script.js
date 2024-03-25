function dijkstra(graph, start) {
    const distances = {};
    const visited = {};
    const queue = [];
    
    for (let vertex in graph) {
        distances[vertex] = Infinity;
        visited[vertex] = false;
    }
    
    distances[start] = 0;
    queue.push({ vertex: start, distance: 0 });
    
    while (queue.length > 0) {
        queue.sort((a, b) => a.distance - b.distance);
        const { vertex: currentVertex, distance: currentDistance } = queue.shift();
        
        if (visited[currentVertex]) continue;
        
        visited[currentVertex] = true;
        
        for (let neighbor in graph[currentVertex]) {
            const distance = currentDistance + graph[currentVertex][neighbor];
            if (distance < distances[neighbor]) {
                distances[neighbor] = distance;
                queue.push({ vertex: neighbor, distance: distance });
            }
        }
    }
    
    return distances;
}

const graph = {
    'A': { 'B': 4, 'C': 2 },
    'B': { 'A': 4, 'C': 5, 'D': 10 },
    'C': { 'A': 2, 'B': 5, 'D': 3 },
    'D': { 'B': 10, 'C': 3 }
};

console.log(dijkstra(graph, 'A'));
