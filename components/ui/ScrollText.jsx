"use client"
import ScrollVelocity from "../Features/ScrollVelocity"

const ScrollText = () => {
  return (
    <section className="mt-15">
      <ScrollVelocity
        texts={[" , Web Dev, Graphic Design", ",Brand Building, Video Editing"]}
        className="custom-scroll-text openSans italic py-[.5rem] text-5xl"
      />
    </section>
  )
}

export default ScrollText
