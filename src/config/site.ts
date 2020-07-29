// Sample values
const hostname = "example.com"
const s3_bucket = "my-s3-bucket"
const s3_region = "us-east-1"

const isProd: boolean = /prod/.test("" + process.env.ENV)
const isDev : boolean = !isProd

if (isProd)
  console.log("\u001b[41;1;37;1mUsing Production config\u001b[0m")
else
  console.log("\u001b[43;30mUsing Development config\u001b[0m")

function singleLine(l: string) {
  return l.replace(/\s+/g, " ").trim()
}

const Year = new Date().getFullYear()

if (isProd)
  console.log(`Terraform settings: [${hostname}] via S3 bucket [${s3_bucket}] @ [${s3_region}]`)

export default {
  isProd,
  isDev,

  title: "ShipReq Blog",

  hostname,

  siteUrl: `https://${hostname}`,

  cardImageUrl: `https://${hostname}/static/ab7f7f3a4df0120151227c3bbb6eed6e/logo-title-1024.png`,

  copyright1: `© 2013-${Year} Bearded Logic.`,
  copyright2: "All rights reserved.",

  locale: "en_AU",

  description: singleLine(`
    A blog detailing technical learnings and experiences during work on ShipReq.
    Common themes are FP (functional programming) with Scala, Scala.JS, @japgolly libraries
    like scalajs-react, scalacss, scala-graal, and other related technologies.
    Coding with high quality is an important ShipReq value and so you can also expect articles
    about advanced type-safety, testing, performance/benchmarking.
    ShipReq is a modern, online tool for software requirements development and management.
  `),

  rssPath: "/rss.xml",

  email: {
    address: "contact@shipreq.com",
    mailto: "mailto:contact@shipreq.com",
  },

  reddit: {
    url: "https://www.reddit.com/r/shipreq/",
  },

  twitter: {
    handle: "@shipreq",
    url: "https://twitter.com/shipreq",
  },

  japgolly: {
    name: "David Barri",
    bio: singleLine(`
      Hi! I'm the founder/creator of ShipReq.
      I've been coding since I was a kid, and
      have been euphorically doing full-stack functional programming in Scala for ${Year - 2012} years and counting.
      I love to create that which sparks joy in others.
    `),
    link: "https://github.com/japgolly",
    twitter: {
      handle: "@japgolly",
      url: "https://twitter.com/japgolly",
    },
  },

  s3: {
    bucket: s3_bucket,
    region: s3_region,
  },
};
