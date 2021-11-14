// the import statements is not ideal and type: module in pkg json is not ideal as well
import pkg from "@prisma/client";
import faker from "faker";
// import { subMonths } from "date-fns";


const { PrismaClient } = pkg;
let prisma;

// this still doesn't solve too many clients connected on server reload
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

async function main() {
  // if (process.env.NODE_ENV !== "development") {
  //   return;
  // }

  // await prisma.user.deleteMany({})
  // await prisma.team.deleteMany({})
  // await prisma.project.deleteMany({})

  // create users
  const jim = await prisma.user.upsert({
    where:  { email: "jim@chingu.io" },
    update: {},
    create: {
      email: `jim@chingu.io`,
      username: "Jim",
      voyageStatus: "TIER3",
      role: "ADMIN",
      isEmailVerified: true,
      creatorOf: {
        create: {
          teamName: "Chingu",
          description: "vitae ipsum aliquam non mauris morbi non lectus",
          githubLink: "http://symantec.com/volutpat/eleifend/donec/ut/dolor.json?eu=nulla&nibh=neque&quisque=libero&id=convallis&justo=eget&sit=eleifend&amet=luctus&sapien=ultricies&dignissim=eu&vestibulum=nibh&vestibulum=quisque&ante=id&ipsum=justo&primis=sit&in=amet&faucibus=sapien&orci=dignissim&luctus=vestibulum&et=vestibulum&ultrices=ante&posuere=ipsum&cubilia=primis&curae=in&nulla=faucibus&dapibus=orci&dolor=luctus&vel=et&est=ultrices&donec=posuere&odio=cubilia&justo=curae&sollicitudin=nulla&ut=dapibus&suscipit=dolor&a=vel&feugiat=est&et=donec&eros=odio&vestibulum=justo&ac=sollicitudin&est=ut&lacinia=suscipit&nisi=a&venenatis=feugiat&tristique=et&fusce=eros&congue=vestibulum&diam=ac&id=est&ornare=lacinia&imperdiet=nisi&sapien=venenatis&urna=tristique&pretium=fusce&nisl=congue&ut=diam&volutpat=id",
          avatarUrl: "http://dummyimage.com/171x100.png/cc0000/ffffff",
          isChinguVoyage: false,
          members: {
            connect: {
              email: "jim@chingu.io",
            }
          }
        }
      },
    },
  });

  const alex = await prisma.user.upsert({
    where:  { email: "alex@example.io" },
    update: {},
    create: {
      email: `alex@example.io`,
      username: "Alex",
      voyageStatus: "TIER3",
      role: "MEMBER",
      isEmailVerified: true,
      creatorOf: {
        create: [
          {
            teamName: "Red",
            description: "morbi quis tortor id nulla ultrices aliquet maecenas",
            githubLink: "https://over-blog.com/vestibulum/ante/ipsum/primis/in/faucibus/orci.jpg?ipsum=duis&dolor=ac&sit=nibh&amet=fusce&consectetuer=lacus&adipiscing=purus&elit=aliquet&proin=at&interdum=feugiat&mauris=non&non=pretium&ligula=quis&pellentesque=lectus&ultrices=suspendisse&phasellus=potenti&id=in&sapien=eleifend&in=quam&sapien=a&iaculis=odio&congue=in&vivamus=hac&metus=habitasse&arcu=platea&adipiscing=dictumst&molestie=maecenas&hendrerit=ut&at=massa&vulputate=quis&vitae=augue&nisl=luctus&aenean=tincidunt&lectus=nulla&pellentesque=mollis&eget=molestie&nunc=lorem&donec=quisque&quis=ut&orci=erat&eget=curabitur&orci=gravida&vehicula=nisi&condimentum=at&curabitur=nibh&in=in&libero=hac&ut=habitasse&massa=platea&volutpat=dictumst&convallis=aliquam&morbi=augue",
            avatarUrl: "http://dummyimage.com/128x100.png/5fa2dd/ffffff",
            isChinguVoyage: true,
            // members: {
            //   connect: {
            //     email: "jim@chingu.io",
            //   }
            // }
          },
          {
            teamName: "Blue",
            description: "dapibus nulla suscipit ligula in lacus",
            githubLink: "http://tripod.com/pretium/iaculis/justo.jpg?ante=porta&vivamus=volutpat&tortor=quam&duis=pede&mattis=lobortis&egestas=ligula&metus=sit&aenean=amet&fermentum=eleifend&donec=pede&ut=libero&mauris=quis&eget=orci&massa=nullam&tempor=molestie&convallis=nibh&nulla=in&neque=lectus&libero=pellentesque&convallis=at&eget=nulla&eleifend=suspendisse&luctus=potenti&ultricies=cras&eu=in&nibh=purus&quisque=eu&id=magna&justo=vulputate&sit=luctus&amet=cum&sapien=sociis&dignissim=natoque&vestibulum=penatibus&vestibulum=et&ante=magnis&ipsum=dis&primis=parturient&in=montes&faucibus=nascetur&orci=ridiculus&luctus=mus&et=vivamus&ultrices=vestibulum&posuere=sagittis&cubilia=sapien&curae=cum&nulla=sociis&dapibus=natoque&dolor=penatibus&vel=et&est=magnis&donec=dis&odio=parturient&justo=montes&sollicitudin=nascetur",
            avatarUrl: "http://dummyimage.com/236x100.png/5fa2dd/ffffff",
            isChinguVoyage: false,
          }
        ]
      },
    },
  });

  const vinclou = await prisma.user.upsert({
    where:  { email: "vinclou@example.io" },
    update: {},
    create: {
      email: `vinclou@example.io`,
      username: "Vincent",
      voyageStatus: "TIER3",
      role: "MEMBER",
      isEmailVerified: true,
      creatorOf: {
        create: [
          {
            teamName: "Green",
            description: "mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec",
            githubLink: "http://google.com.hk/sed/accumsan/felis/ut/at/dolor.jsp?rhoncus=in&sed=magna&vestibulum=bibendum&sit=imperdiet&amet=nullam&cursus=orci&id=pede&turpis=venenatis&integer=non&aliquet=sodales&massa=sed&id=tincidunt&lobortis=eu&convallis=felis&tortor=fusce&risus=posuere&dapibus=felis&augue=sed&vel=lacus&accumsan=morbi&tellus=sem&nisi=mauris&eu=laoreet&orci=ut&mauris=rhoncus&lacinia=aliquet&sapien=pulvinar&quis=sed&libero=nisl&nullam=nunc&sit=rhoncus&amet=dui&turpis=vel&elementum=sem&ligula=sed&vehicula=sagittis&consequat=nam&morbi=congue&a=risus&ipsum=semper&integer=porta&a=volutpat&nibh=quam&in=pede&quis=lobortis&justo=ligula&maecenas=sit&rhoncus=amet&aliquam=eleifend&lacus=pede&morbi=libero&quis=quis&tortor=orci&id=nullam&nulla=molestie&ultrices=nibh&aliquet=in&maecenas=lectus&leo=pellentesque&odio=at&condimentum=nulla&id=suspendisse&luctus=potenti",
            avatarUrl: "http://dummyimage.com/200x100.png/cc0000/ffffff",
            isChinguVoyage: false,
            members: {
              connect: {
                email: "vinclou@example.io",
              }
            }
          },
          {
            teamName: "Yellow",
            description: "dui proin leo odio porttitor id consequat in consequat",
            githubLink: "https://artisteer.com/nulla/suspendisse/potenti.html?a=lectus&pede=pellentesque&posuere=at&nonummy=nulla&integer=suspendisse&non=potenti&velit=cras&donec=in&diam=purus&neque=eu&vestibulum=magna&eget=vulputate&vulputate=luctus&ut=cum&ultrices=sociis&vel=natoque&augue=penatibus&vestibulum=et&ante=magnis&ipsum=dis&primis=parturient&in=montes&faucibus=nascetur&orci=ridiculus&luctus=mus&et=vivamus&ultrices=vestibulum&posuere=sagittis&cubilia=sapien&curae=cum&donec=sociis&pharetra=natoque&magna=penatibus&vestibulum=et&aliquet=magnis&ultrices=dis&erat=parturient&tortor=montes&sollicitudin=nascetur&mi=ridiculus&sit=mus&amet=etiam&lobortis=vel&sapien=augue&sapien=vestibulum&non=rutrum&mi=rutrum&integer=neque&ac=aenean&neque=auctor&duis=gravida&bibendum=sem&morbi=praesent&non=id&quam=massa&nec=id&dui=nisl&luctus=venenatis&rutrum=lacinia&nulla=aenean&tellus=sit&in=amet&sagittis=justo&dui=morbi&vel=ut&nisl=odio&duis=cras&ac=mi&nibh=pede&fusce=malesuada&lacus=in&purus=imperdiet&aliquet=et&at=commodo&feugiat=vulputate&non=justo&pretium=in&quis=blandit&lectus=ultrices&suspendisse=enim&potenti=lorem&in=ipsum&eleifend=dolor",
            avatarUrl: "http://dummyimage.com/231x100.png/dddddd/000000",
            isChinguVoyage: true,
            members: {
              connect: {
                email: "vinclou@example.io",
              }
            }
          }
        ]
      },
    },
  });

  const biz = await prisma.user.upsert({
    where:  { email: "biz@example.io" },
    update: {},
    create: {
      email: `biz@example.io`,
      username: "Elizabeth",
      voyageStatus: "TIER3",
      role: "MEMBER",
      isEmailVerified: true,
      creatorOf: {
        create: {
          teamName: "Orange",
          description: "tristique est et tempus semper est quam pharetra magna ac consequat metus",
          githubLink: "http://bbc.co.uk/elit/proin/interdum/mauris/non.js?interdum=etiam&mauris=pretium&non=iaculis&ligula=justo&pellentesque=in&ultrices=hac&phasellus=habitasse&id=platea&sapien=dictumst&in=etiam&sapien=faucibus&iaculis=cursus&congue=urna&vivamus=ut&metus=tellus&arcu=nulla&adipiscing=ut&molestie=erat&hendrerit=id&at=mauris&vulputate=vulputate&vitae=elementum&nisl=nullam&aenean=varius&lectus=nulla&pellentesque=facilisi&eget=cras&nunc=non&donec=velit&quis=nec&orci=nisi&eget=vulputate&orci=nonummy&vehicula=maecenas&condimentum=tincidunt&curabitur=lacus&in=at&libero=velit&ut=vivamus&massa=vel&volutpat=nulla&convallis=eget&morbi=eros&odio=elementum&odio=pellentesque&elementum=quisque&eu=porta&interdum=volutpat&eu=erat&tincidunt=quisque&in=erat&leo=eros&maecenas=viverra&pulvinar=eget&lobortis=congue&est=eget&phasellus=semper&sit=rutrum&amet=nulla&erat=nunc&nulla=purus&tempus=phasellus&vivamus=in&in=felis&felis=donec&eu=semper&sapien=sapien&cursus=a&vestibulum=libero&proin=nam&eu=dui&mi=proin&nulla=leo&ac=odio&enim=porttitor&in=id&tempor=consequat&turpis=in&nec=consequat&euismod=ut&scelerisque=nulla&quam=sed&turpis=accumsan&adipiscing=felis&lorem=ut&vitae=at",
          avatarUrl: "http://dummyimage.com/187x100.png/5fa2dd/ffffff",
          isChinguVoyage: true,
          members: {
            connect: {
              email: "biz@example.io",
            }
          }
        }
      },
    },
  });

  const mia = await prisma.user.upsert({
    where:  { email: "mia@example.io" },
    update: {},
    create: {
      email: `mia@example.io`,
      username: "Mia",
      voyageStatus: "TIER3",
      role: "MEMBER",
      isEmailVerified: true,
      creatorOf: {
        create: {
          teamName: "Purple",
          description: "tristique est et tempus semper est quam pharetra magna ac consequat metus",
          githubLink: "http://bbc.co.uk/elit/proin/interdum/mauris/non.js?interdum=etiam&mauris=pretium&non=iaculis&ligula=justo&pellentesque=in&ultrices=hac&phasellus=habitasse&id=platea&sapien=dictumst&in=etiam&sapien=faucibus&iaculis=cursus&congue=urna&vivamus=ut&metus=tellus&arcu=nulla&adipiscing=ut&molestie=erat&hendrerit=id&at=mauris&vulputate=vulputate&vitae=elementum&nisl=nullam&aenean=varius&lectus=nulla&pellentesque=facilisi&eget=cras&nunc=non&donec=velit&quis=nec&orci=nisi&eget=vulputate&orci=nonummy&vehicula=maecenas&condimentum=tincidunt&curabitur=lacus&in=at&libero=velit&ut=vivamus&massa=vel&volutpat=nulla&convallis=eget&morbi=eros&odio=elementum&odio=pellentesque&elementum=quisque&eu=porta&interdum=volutpat&eu=erat&tincidunt=quisque&in=erat&leo=eros&maecenas=viverra&pulvinar=eget&lobortis=congue&est=eget&phasellus=semper&sit=rutrum&amet=nulla&erat=nunc&nulla=purus&tempus=phasellus&vivamus=in&in=felis&felis=donec&eu=semper&sapien=sapien&cursus=a&vestibulum=libero&proin=nam&eu=dui&mi=proin&nulla=leo&ac=odio&enim=porttitor&in=id&tempor=consequat&turpis=in&nec=consequat&euismod=ut&scelerisque=nulla&quam=sed&turpis=accumsan&adipiscing=felis&lorem=ut&vitae=at",
          avatarUrl: "http://dummyimage.com/187x100.png/5fa2dd/ffffff",
          isChinguVoyage: true,
          members: {
            connect: {
              email: "mia@example.io",
            }
          }
        }
      }
    },
  });

  // example -> add some members to the purple team
  // const getAlex = await prisma.team.update({
  //   where: {
  //     teamName: "Red",
  //     teamName: "Blue",
  //   },
  //   data: {
  //     members: {
  //       connect: [
  //         // { email: "jim@chingu.io" },
  //         { email: "alex@example.io"}
  //       ]
  //     }
  //   }
  // });
  // console.log(getAlex);
  // seed tables with projects
  const teams = await prisma.team.findMany();
  console.log(teams);
  let usrs, prjs;

  for (const [team, user] of [
    [teams[0], [jim, mia, biz]],
    [teams[1], [jim, mia, vinclou, alex, biz]],
    [teams[2], [jim, mia, vinclou, alex]],
    [teams[3], [jim, mia, vinclou, alex]],
  ]) {

    for(const usr of user) {
      usrs = await prisma.team.update({
        where: {
          teamName: team.teamName,
        },
        data: {
          members: {
            connect: [
              { email: usr.email}
            ]
          }
        }
      })
    }

    prjs = await prisma.project.create({
      data: {
        projectName: faker.commerce.productName(),
        catchPhrase: faker.company.catchPhrase(),
        description: faker.lorem.paragraph(),
        startDate:   faker.date.future(),
        timeZone:    faker.address.timeZone(),
        team: {
          connect: { id: team.id }
        },
      }
    });
  }

  await Promise.all([usrs, prjs]);

  // const projects = await prisma.project.create({
  //   data: {
  //     projectName: faker.commerce.productName(),
  //     catchPhrase: faker.company.catchPhrase(),
  //     description: faker.lorem.paragraph(),
  //     startDate:   faker.date.future(),
  //     timeZone:    faker.address.timeZone(),
  //     team: {
  //       connect: { id: teams[0].id }
  //     },
  //   }
  // });
  // console.log(projects);
  // const users = await prisma.user.findMany();
  // console.log(users);


  // console.log(teams);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
