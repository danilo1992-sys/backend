import { PrismaClient } from "./generated/prisma/client.ts";

const prisma = new PrismaClient();

async function main() {
  await prisma.timeline.deleteMany();
  await prisma.evento.deleteMany();

  await prisma.evento.create({
    data: {
      id: "evt_001",
      nombre: "Fiesta de Cumpleaños",
      fecha: new Date("2025-06-15T20:00:00Z"),
      direccion: "Av. Principal 123, Ciudad",
      preferencias: {
        set: [
          { nombre: "Salsa", timestamp: new Date(), registradoPor: "admin" },
          { nombre: "Merengue", timestamp: new Date(), registradoPor: "admin" },
        ],
      },
      playlistCliente: {
        set: [
          { titulo: "Despacito", artista: "Luis Fonsi" },
          { titulo: "Bailando", artista: "Enrique Iglesias" },
        ],
      },
      timeline: {
        create: [
          {
            hora: new Date("2025-06-15T20:00:00Z"),
            actividad: "Bienvenida e ingreso",
            descripcion: "Recepcón de invitados",
            tipo: "general",
          },
          {
            hora: new Date("2025-06-15T21:00:00Z"),
            actividad: "Corte de cake",
            descripcion: "Corte de pastel y brindis",
            tipo: "especial",
          },
          {
            hora: new Date("2025-06-15T21:30:00Z"),
            actividad: "Primera tanda musical",
            descripcion: "Salsa y merengue",
            tipo: "musica",
          },
          {
            hora: new Date("2025-06-15T23:00:00Z"),
            actividad: "Fiesta libre",
            descripcion: "DJ con repertorio variado",
            tipo: "musica",
          },
        ],
      },
    },
  });

  await prisma.evento.create({
    data: {
      id: "evt_002",
      nombre: "Boda García-Rodríguez",
      fecha: new Date("2025-07-20T18:00:00Z"),
      direccion: "Salón Elegante, Calle Luna 456",
      preferencias: {
        set: [
          { nombre: "Balada", timestamp: new Date(), registradoPor: "novia" },
          { nombre: "Pop Romántico", timestamp: new Date(), registradoPor: "novio" },
        ],
      },
      playlistCliente: {
        set: [
          { titulo: "Perfect", artista: "Ed Sheeran" },
          { titulo: "A Thousand Years", artista: "Christina Perri" },
          { titulo: "Thinking Out Loud", artista: "Ed Sheeran" },
        ],
      },
      timeline: {
        create: [
          {
            hora: new Date("2025-07-20T18:00:00Z"),
            actividad: "Ceremonia religiosa",
            descripcion: "Misa en la iglesia",
            tipo: "ceremonia",
          },
          {
            hora: new Date("2025-07-20T19:30:00Z"),
            actividad: "Cóctel de bienvenida",
            descripcion: "Recepción con宾客",
            tipo: "general",
          },
          {
            hora: new Date("2025-07-20T20:00:00Z"),
            actividad: "Entrada de los novios",
            descripcion: "Entrada al salón de bodas",
            tipo: "especial",
          },
          {
            hora: new Date("2025-07-20T20:30:00Z"),
            actividad: "Primera tanda musical",
            descripcion: "Baladas románticas",
            tipo: "musica",
          },
          {
            hora: new Date("2025-07-20T21:00:00Z"),
            actividad: "Corte de pastel",
            descripcion: "Corte del pastel nupcial",
            tipo: "especial",
          },
          {
            hora: new Date("2025-07-20T21:30:00Z"),
            actividad: "Vals de los novios",
            descripcion: "Primer baile como esposos",
            tipo: "especial",
          },
          {
            hora: new Date("2025-07-20T22:00:00Z"),
            actividad: "Fiesta",
            descripcion: "DJ con todas las peticiones",
            tipo: "musica",
          },
        ],
      },
    },
  });

  await prisma.evento.create({
    data: {
      id: "evt_003",
      nombre: "Graduación 2025",
      fecha: new Date("2025-08-10T19:00:00Z"),
      direccion: "Auditorio Universitario",
      preferencias: {
        set: [
          { nombre: "Reggaetón", timestamp: new Date(), registradoPor: "estudiante" },
          { nombre: "Pop", timestamp: new Date(), registradoPor: "estudiante" },
          { nombre: "Rock", timestamp: new Date(), registradoPor: "estudiante" },
        ],
      },
      playlistCliente: {
        set: [
          { titulo: "Vivir Mi Vida", artista: "Marc Anthony" },
          { titulo: "Happy", artista: "Pharrell Williams" },
          { titulo: "Can't Stop the Feeling", artista: "Justin Timberlake" },
        ],
      },
      timeline: {
        create: [
          {
            hora: new Date("2025-08-10T19:00:00Z"),
            actividad: "Ceremonia de graduación",
            descripcion: "Entrega de diplomas",
            tipo: "ceremonia",
          },
          {
            hora: new Date("2025-08-10T20:00:00Z"),
            actividad: "Cóctel",
            descripcion: "Refrigerios y fotos",
            tipo: "general",
          },
          {
            hora: new Date("2025-08-10T20:30:00Z"),
            actividad: "Primera tanda musical",
            descripcion: "Reggaetón y pop",
            tipo: "musica",
          },
          {
            hora: new Date("2025-08-10T22:00:00Z"),
            actividad: "Fiesta de graduación",
            descripcion: "DJ con requests",
            tipo: "musica",
          },
        ],
      },
    },
  });

  await prisma.evento.create({
    data: {
      id: "evt_004",
      nombre: "Aniversario de Empresa",
      fecha: new Date("2025-09-05T21:00:00Z"),
      direccion: "Hotel Grand, Piso 15",
      preferencias: {
        set: [
          { nombre: "Jazz", timestamp: new Date(), registradoPor: "rrhh" },
          { nombre: "Swing", timestamp: new Date(), registradoPor: "rrhh" },
        ],
      },
      playlistCliente: {
        set: [
          { titulo: "Fly Me to the Moon", artista: "Frank Sinatra" },
          { titulo: "Mack the Knife", artista: "Bobby Darin" },
        ],
      },
      timeline: {
        create: [
          {
            hora: new Date("2025-09-05T21:00:00Z"),
            actividad: "Bienvenida",
            descripcion: "Cóctel de bienvenida",
            tipo: "general",
          },
          {
            hora: new Date("2025-09-05T21:30:00Z"),
            actividad: "Palabras del director",
            descripcion: "Discurso anual",
            tipo: "especial",
          },
          {
            hora: new Date("2025-09-05T22:00:00Z"),
            actividad: "Cena",
            descripcion: "Cena formal",
            tipo: "general",
          },
          {
            hora: new Date("2025-09-05T23:00:00Z"),
            actividad: "Jazz en vivo",
            descripcion: "Banda de jazz",
            tipo: "musica",
          },
          {
            hora: new Date("2025-09-05T23:30:00Z"),
            actividad: "Fiesta libre",
            descripcion: "DJ con swing y jazz",
            tipo: "musica",
          },
        ],
      },
    },
  });

  await prisma.evento.create({
    data: {
      id: "evt_005",
      nombre: "Quinceañera Sofía",
      fecha: new Date("2025-10-25T19:30:00Z"),
      direccion: "Salón de Fiestas Arcoíris",
      preferencias: {
        set: [
          { nombre: "Pop Latino", timestamp: new Date(), registradoPor: "quinceañera" },
          { nombre: "K-pop", timestamp: new Date(), registradoPor: "quinceañera" },
          { nombre: "Reggaetón", timestamp: new Date(), registradoPor: "familia" },
        ],
      },
      playlistCliente: {
        set: [
          { titulo: "TTT", artista: "Seventeen" },
          { titulo: "Dynamite", artista: "BTS" },
          { titulo: "Dakiti", artista: "Bad Bunny" },
          { titulo: "La Fama", artista: "Rosalía" },
        ],
      },
      timeline: {
        create: [
          {
            hora: new Date("2025-10-25T19:30:00Z"),
            actividad: "Recepcíon de invitados",
            descripcion: "Bienvenida a la quinceañera",
            tipo: "general",
          },
          {
            hora: new Date("2025-10-25T20:00:00Z"),
            actividad: "Entrada de la quinceañera",
            descripcion: "Gran entrada con padre",
            tipo: "especial",
          },
          {
            hora: new Date("2025-10-25T20:30:00Z"),
            actividad: "Vals",
            descripcion: "Baile con padre e invitados",
            tipo: "especial",
          },
          {
            hora: new Date("2025-10-25T21:00:00Z"),
            actividad: "Primera tanda musical",
            descripcion: "K-pop y pop latino",
            tipo: "musica",
          },
          {
            hora: new Date("2025-10-25T22:00:00Z"),
            actividad: "Corte de pastel",
            descripcion: "Momento especial",
            tipo: "especial",
          },
          {
            hora: new Date("2025-10-25T22:30:00Z"),
            actividad: "Fiesta",
            descripcion: "DJ con todos los géneros",
            tipo: "musica",
          },
        ],
      },
    },
  });

  console.log("Seed completado: 5 eventos creados con timeline");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
