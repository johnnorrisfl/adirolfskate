import React from "react"

const Hero = () => (
  <>
    <section
      className={`drop-shadow-lg  mx-[-1rem]  bg-[url('https://d1k5l1t2ld94t6.cloudfront.net/krys-amon-EVwuoMy19JU-unsplash+cropped+4.png')] bg-center bg-cover bg-no-repeat h-96`}
    >
      <div className="h-full w-full bg-blue-500/5 text-center flex-col flex space-y-3 content-center ">
        <h1 className="text-3xl font-sans pt-4 ml-auto mr-auto font-light text-adirolf-blue">
          Building skateboard community
        </h1>
        <a
          href="https://gofund.me/5713ca6f"
          target={"_blank"}
          className="rounded-none self-center bg-adirolf-yellow py-2 px-4 drop-shadow-lg"
          rel="noreferrer"
        >
          Donate
        </a>
      </div>
    </section>
    <article className="prose prose-lg">
      <p className="text-center">
        We believe skateboarding builds character in youth of all backgrounds
        through competition and connection. Adirolf dedicates itself to
        producing youth skate events all over Florida.
      </p>
    </article>
  </>
)

export default Hero
