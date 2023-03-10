const bfs = (graph, start, n) => {
  const visited = Array.from({ length: n + 1 }, () => false);
  const dist = Array.from({ length: n + 1 }, () => 0);
  const queue = [start];

  while (queue.length > 0) {
    const curNode = queue.shift();
    if (visited[curNode]) continue;
    visited[curNode] = true;

    graph[curNode].forEach((nextNode) => {
      if (dist[nextNode] === 0 && nextNode !== 1) {
        dist[nextNode] = dist[curNode] + 1;
        queue.push(nextNode);
      }
    });
  }

  return dist;
};

const getGraph = (n, edge) => {
  const graph = Array.from({ length: n + 1 }, () => []);
  edge.forEach(([a, b]) => {
    graph[a].push(b);
    graph[b].push(a);
  });

  return graph;
};

function solution(n, edge) {
  const graph = getGraph(n, edge);
  const dist = bfs(graph, 1, n);
  const max = Math.max(...dist);

  return dist.filter((d) => d === max).length;
}
