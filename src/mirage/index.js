import { createServer, Model } from "miragejs";

const stubProduct = {
  status: "active", // "active" | "archived" | "draft",
  title: "IPod Nano - 8GB",
  tags: ["Emotive", "Flash Memory, MP3", "Music"],
  replenishable: true,
  vendor: "Apple",
  id: 1,
};

export function makeMockApi() {
  return createServer({
    models: {
      product: Model,
    },
    seeds(server) {
      server.create("product", stubProduct);
    },
    routes() {
      this.namespace = "api";

      this.get("/products/:id", (schema, request) => {
        let id = request.params.id;

        return schema.products.find(id);
      });

      this.patch("/products/:id", (schema, request) => {
        let newAttrs = JSON.parse(request.requestBody);
        let id = request.params.id;
        let product = schema.products.find(id);

        return product.update(newAttrs);
      });
    },
  });
}
