import { PrismaClient } from "../generated/prisma/client";
const prisma = new PrismaClient();

const get = {
  async evento(id: string) {
    return prisma.evento.findUnique({
      where: { id },
    });
  },
};

const create = {
  async createevent(id: string, nombre: string, fecha: Date, direccion: string) {
    return prisma.evento.create({
      data: {
        id,
        nombre,
        fecha,
        direccion,
      },
    });
  },
};

const update = {
  async updateevent(
    id: string,
    nombre?: string,
    fecha?: Date,
    direccion?: string,
  ) {
    return prisma.evento.update({
      where: { id },
      data: {
        ...(nombre && { nombre }),
        ...(fecha && { fecha }),
        ...(direccion && { direccion }),
      },
    });
  },
};

const patch = {
  async patchevent(
    id: string,
    data: { nombre?: string; fecha?: Date; direccion?: string },
  ) {
    return prisma.evento.update({
      where: { id },
      data: {
        ...(data.nombre && { nombre: data.nombre }),
        ...(data.fecha && { fecha: data.fecha }),
        ...(data.direccion && { direccion: data.direccion }),
      },
    });
  },
};

const remove = {
  async deleteevent(id: string) {
    return prisma.evento.delete({
      where: { id },
    });
  },
};

export default {
  get,
  create,
  update,
  patch,
  remove,
};
