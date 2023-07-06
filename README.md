# resolution-subgraph

## Local Development

### Run graph node locally:

```bash
docker compose up
```

## Restart graph node and clear volumes:

```bash
docker compose down
```

```bash
sudo docker rm resolution-subgraph_graph-node_1 && sudo docker rm resolution-subgraph_ipfs_1 && sudo docker rm resolution-subgraph_postgres_1 && sudo docker rm resolution-subgraph_ganache_1
```

## Create and deploy subgraph

While local subgraph node is running run:

```bash
yarn create-local
```

```bash
yarn deploy-local
```

Access the GraphQL editor at:

[`http://localhost:8000/subgraphs/name/resolutions-subgraph/graphql`](http://localhost:8000/subgraphs/name/resolutions-subgraph/graphql)

**Example query:**

```graphQL
query marketResolutions { 
  marketResolutions {
    id
    author
    ancillaryData
    lastUpdateTimestamp
    status
    wasDisputed
    proposedPrice
    reproposedPrice
    price
    updates
  }
}
```

