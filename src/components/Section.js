import Container from "./Container";

export default function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="py-20">
      <Container>
        <div className="flex flex-col gap-6">
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#5d6672]">
              {eyebrow}
            </p>
          ) : null}
          {title ? (
            <h2 className="text-3xl font-semibold tracking-tight text-[#0e1116] sm:text-4xl">
              {title}
            </h2>
          ) : null}
          <div className="text-base leading-7 text-[#5d6672]">{children}</div>
        </div>
      </Container>
    </section>
  );
}
