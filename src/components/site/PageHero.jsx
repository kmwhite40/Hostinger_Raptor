import { motion } from 'framer-motion';

const rise = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

/** Editorial interior-page hero: mono eyebrow, large display title, lede + actions. */
export function PageHero({ eyebrow, title, subtitle, children }) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_70%_at_15%_0%,oklch(0.66_0.2_31/0.08),transparent)]" />
      <div className="container-x relative py-20 md:py-28">
        {eyebrow && (
          <motion.p {...rise} className="label-mono tick">{eyebrow}</motion.p>
        )}
        <motion.h1 {...rise} transition={{ ...rise.transition, delay: 0.05 }} className="fluid-h2 mt-6 max-w-4xl font-display font-extrabold">
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p {...rise} transition={{ ...rise.transition, delay: 0.1 }} className="measure mt-6 text-lg text-muted-foreground">
            {subtitle}
          </motion.p>
        )}
        {children && (
          <motion.div {...rise} transition={{ ...rise.transition, delay: 0.15 }} className="mt-9 flex flex-col gap-3 sm:flex-row">
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
