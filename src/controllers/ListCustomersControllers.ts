import { FastifyRequest, FastifyReply } from "fastify";
import { ListCustomersService } from "../services/ListCustomersService";

class ListCustomersController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const listCustomerService = new ListCustomersService();

    const customer = await listCustomerService.execute();

    reply.send(customer);
  }
}

export { ListCustomersController };
