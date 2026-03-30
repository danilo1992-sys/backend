import { PrismaClient } from "../generated/prisma/client";

const prisma = new PrismaClient();

interface EventoBody {
  id?: string;
  nombre?: string;
  fecha?: string;
  direccion?: string;
}

async function GET(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const id = url.searchParams.get("id");

  if (id) {
    const evento = await prisma.evento.findUnique({ where: { id } });
    if (!evento) {
      return Response.json({ error: "Evento no encontrado" }, { status: 404 });
    }

    const timeline = await prisma.timeline.findMany({
      where: { eventoId: id },
      orderBy: { hora: "asc" },
    });

    return Response.json({ ...evento, timeline });
  }

  const eventos = await prisma.evento.findMany();
  return Response.json(eventos);
}

async function GETTimeline(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const pathParts = url.pathname.split("/");
  const id =
    pathParts[pathParts.length - 2] === "eventos"
      ? pathParts[pathParts.length - 1]
      : pathParts[pathParts.length - 2];

  const evento = await prisma.evento.findUnique({ where: { id } });
  if (!evento) {
    return Response.json({ error: "Evento no encontrado" }, { status: 404 });
  }

  const timeline = await prisma.timeline.findMany({
    where: { eventoId: id },
    orderBy: { hora: "asc" },
  });

  return Response.json({
    evento: { id: evento.id, nombre: evento.nombre, fecha: evento.fecha },
    timeline,
  });
}

async function POST(req: Request): Promise<Response> {
  try {
    const body = (await req.json()) as EventoBody;
    const { id, nombre, fecha, direccion } = body;

    if (!id || !nombre || !fecha || !direccion) {
      return Response.json(
        { error: "Faltan campos requeridos" },
        { status: 400 },
      );
    }

    const evento = await prisma.evento.create({
      data: { id, nombre, fecha: new Date(fecha), direccion },
    });
    return Response.json(evento, { status: 201 });
  } catch (error) {
    return Response.json({ error: "Error al crear evento" }, { status: 500 });
  }
}

async function PUT(req: Request): Promise<Response> {
  try {
    const body = (await req.json()) as EventoBody;
    const { id, nombre, fecha, direccion } = body;

    if (!id) {
      return Response.json({ error: "ID requerido" }, { status: 400 });
    }

    const evento = await prisma.evento.update({
      where: { id },
      data: {
        ...(nombre && { nombre }),
        ...(fecha && { fecha: new Date(fecha) }),
        ...(direccion && { direccion }),
      },
    });
    return Response.json(evento);
  } catch (error) {
    return Response.json({ error: "Error al actualizar" }, { status: 500 });
  }
}

async function DELETE(req: Request): Promise<Response> {
  try {
    const body = (await req.json()) as EventoBody;
    const { id } = body;

    if (!id) {
      return Response.json({ error: "ID requerido" }, { status: 400 });
    }

    await prisma.evento.delete({ where: { id } });
    return Response.json({ message: "Evento eliminado" });
  } catch (error) {
    return Response.json({ error: "Error al eliminar" }, { status: 500 });
  }
}

export default {
  "/": {
    GET: () =>
      new Response(JSON.stringify({ message: "Welcome to app" }), {
        headers: { "Content-Type": "application/json" },
      }),
  },
  "/eventos": {
    GET,
    POST,
  },
  "/eventos/update": {
    PUT,
  },
  "/eventos/delete": {
    DELETE,
  },
  "/eventos/:id/timeline": {
    GET: GETTimeline,
  },
};
