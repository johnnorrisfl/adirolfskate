import React from "react"
import Img from "./img"

const Socials = () => {
  return (
    <section id="socials">
      <header class="prose">
        <p class="">Follow us on the socials.</p>
      </header>

      <ul
        id="socials"
        class="flex flex-col flex-wrap content-start justify-start pl-0 mt-2 list-none xs:flex-row not-prose space-y-4 xs:space-y-0 xs:space-x-4"
      >
        <li class="flex-none">
          <a
            href="https://www.youtube.com/channel/UCr2GXjjGmL7Kq9MkKkKUs5g"
            target={"_blank"}
            rel="noreferrer"
          >
            <Img
              alt="YouTube logo"
              class="h-5"
              src="/YouTube_logo_2017.svg"
            ></Img>
          </a>
        </li>
        <li class="flex-none">
          <a
            href="https://www.facebook.com/Adirolfskateboards"
            target={"_blank"}
            rel="noreferrer"
            class="flex space-x-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5"
              version="1.1"
              style={{
                shapeRendering: "geometricPrecision",
                textRendering: "geometricPrecision",
                imageRendering: "optimizeQuality",
                fillRule: "evenodd",
                clipRule: "evenodd",
              }}
              viewBox="0 0 14222 14222"
            >
              <defs>
                <style type="text/css">.fil0 .fil1</style>
              </defs>
              <g id="Layer_x0020_1">
                <metadata id="CorelCorpID_0Corel-Layer" />
                <path
                  style={{ fill: "#1977F3", fillRule: "nonzero" }}
                  class="fil0"
                  d="M14222 7111c0,-3927 -3184,-7111 -7111,-7111 -3927,0 -7111,3184 -7111,7111 0,3549 2600,6491 6000,7025l0 -4969 -1806 0 0 -2056 1806 0 0 -1567c0,-1782 1062,-2767 2686,-2767 778,0 1592,139 1592,139l0 1750 -897 0c-883,0 -1159,548 -1159,1111l0 1334 1972 0 -315 2056 -1657 0 0 4969c3400,-533 6000,-3475 6000,-7025z"
                />
                <path
                  style={{ fill: "#FEFEFE", fillRule: "nonzero" }}
                  d="M9879 9167l315 -2056 -1972 0 0 -1334c0,-562 275,-1111 1159,-1111l897 0 0 -1750c0,0 -814,-139 -1592,-139 -1624,0 -2686,984 -2686,2767l0 1567 -1806 0 0 2056 1806 0 0 4969c362,57 733,86 1111,86 378,0 749,-30 1111,-86l0 -4969 1657 0z"
                />
              </g>
            </svg>

            <Img alt="Facebook logo" class="h-5" src="/Facebook_2019.svg"></Img>
          </a>
        </li>
        <li class="flex-none">
          <a
            href="https://www.instagram.com/adirolfskateboarding/"
            target={"_blank"}
            rel="noreferrer"
            class="flex space-x-1"
          >
            <svg viewBox="0 0 448 512" class="h-5" style={{ color: "#c13584" }}>
              <path
                fill="currentColor"
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              />
            </svg>
            <Img
              alt="Instagram logo"
              class="h-6 pt-1"
              src="/Instagram_2016_wordmark.svg"
            ></Img>
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Socials
