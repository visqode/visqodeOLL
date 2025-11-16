"use client";
import { motion } from "framer-motion";
import ScrollReveal from "./Features/ScrollReveal";
import GlareHover from "./Features/GlareHover";

const AboutSection = () => {
  return (
    <section className="my-16 md:my-32 mx-4 md:mx-20 flex items-center justify-center">
      <div className="flex flex-col lg:flex-row justify-between items-center max-w-7xl mx-auto gap-8 lg:gap-12">
        <motion.div
          className="w-full lg:w-1/2 order-2 lg:order-1"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.33, 0, 0, 1] }}
        >
          <div className="text-4xl md:text-6xl racing font-bold mb-8 md:mb-16 text-center lg:text-left">
            About Us
          </div>
          <div className="text-xl mb-10">
            We are a dynamic web development and brand-building company
            dedicated to crafting innovative digital experiences. Specializing
            in cutting-edge web solutions and strategic branding, we empower
            businesses to stand out in the digital landscape with bespoke
            websites and compelling brand identities.
          </div>

          <div className="text-xl">
            Our team combines creativity and technical expertise to deliver
            seamless, high-performance websites using technologies like React,
            Next.js, and GSAP. From startups to established enterprises, we
            transform visions into reality, ensuring every project resonates
            with its audience and drives growth.
          </div>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.33, 0, 0, 1] }}
        >
          <GlareHover
            className="border-none shadow-black/90 drop-shadow-lg w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px]"
            glareColor="#fff"
            glareOpacity={0.3}
            glareAngle={-30}
            glareSize={300}
            transitionDuration={800}
            playOnce={false}
          >
            <img
              className="bg-cover bg-center rounded-2xl md:rounded-3xl animate-shine w-full h-auto"
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Team collaboration"
            />
          </GlareHover>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
