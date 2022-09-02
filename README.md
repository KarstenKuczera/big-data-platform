# Use Case: Most Liked Tweets

```json
{
  "tweet": "tweet-10",
  "timestamp": 1604325221
}
```

## Disclaimer

The provided base code was already not working.
We don't recommend starting the code, it could harm the pc with lasting problems.
For this sake we provided a demonstration of how the code would look.
You can find it in the 'demo-app' folder.
To start it, simply open the 'index.html' in a modern browser of your choice.

## Prerequisites

A running Strimzi.io Kafka operator

```bash
helm repo add strimzi http://strimzi.io/charts/
helm install my-kafka-operator strimzi/strimzi-kafka-operator
kubectl apply -f https://farberg.de/talks/big-data/code/helm-kafka-operator/kafka-cluster-def.yaml
```

A running Hadoop cluster with YARN (for checkpointing)

```bash
helm repo add stable https://charts.helm.sh/stable
helm install --namespace=default --set hdfs.dataNode.replicas=1 --set yarn.nodeManager.replicas=1 --set hdfs.webhdfs.enabled=true my-hadoop-cluster stable/hadoop
```

## Deploy

To develop using [Skaffold](https://skaffold.dev/), use `skaffold dev`.
