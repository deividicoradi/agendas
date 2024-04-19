import Fastify from "fastify";
import { contactsRoutes } from "./routes/contact.routes";
import { userRoutes } from "./routes/user.routes";

const app = Fastify();

app.register(userRoutes, {
  prefix: '/users',
});

app.register(contactsRoutes, {
  prefix: '/contacts',
});

app.listen({
  port: 3000
},
  () => console.log('Server is running on port 3000'),
);
