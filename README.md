# resolutions-subgraph

## Codegen

Run the following command to generate the `generated` folder:

```bash
yarn codegen
```

## Environment Variables

Create a `.env` file with the following variables:

```bash
MATIC_RPC_URL=
```

## Local Development

### Run graph node locally

```bash
docker compose up
```

## Restart graph node and clear volumes

```bash
docker compose down
```

```bash
sudo docker rm resolution-subgraph-graph-node-1 && sudo docker rm resolution-subgraph-ipfs-1 && sudo docker rm resolution-subgraph-postgres-1 && sudo docker rm resolution-subgraph-ganache-1
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

## Goldsky

Build the subgraph with `yarn build` and then run the following to deploy:

```bash
goldsky subgraph deploy resolutions-subgraph/<version> --path .
```
