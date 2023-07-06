# resolution-subgraph

## Local Development


```bash
yarn create-local
```

```bash
yarn deploy-local
```


```bash
sudo docker rm resolution-subgraph_graph-node_1 && sudo docker rm resolution-subgraph_ipfs_1 && sudo docker rm resolution-subgraph_postgres_1 && sudo docker rm resolution-subgraph_ganache_1
```

Access the GraphQL editor at:

[`http://localhost:8000/subgraphs/name/resolutions-subgraph/graphql`](http://localhost:8000/subgraphs/name/resolutions-subgraph/graphql)

```graphQL
query marketResolutions { 
  marketResolutions {
    id
    author
    ancillaryData
    lastUpdateTimestamp
    status
    proposedPrice
    reproposedPrice
    price
    updates
  }
}
```

```
query marketResolutions{ marketResolutions (first: 100, orderBy: lastUpdateTimestamp) {
  id
  author
  ancillaryData
  lastUpdateTimestamp
  status
  proposedPrice
  reproposedPrice
  price
  updates
} }
```

