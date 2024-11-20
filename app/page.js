import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="max-w-6xl mx-auto px-6 py-20">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#f8f8f814_1px,transparent_1px),linear-gradient(#f8f8f814_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t  from-black"></div>
        <div className="flex flex-col items-center text-center space-y-6">
          <div
            style={{
              backgroundImage:
                "radial-gradient(50% 75% at 50% 0%, rgba(255, 255, 255, 0.1) 0%, rgb(0, 0, 0) 98.65%)",
            }}
            className="flex items-center justify-center gap-2 border-[rgba(255, 255, 255, .15)] border-[0.5px] rounded-full text-white px-3 py-1 text-xs lg:text-sm"
          >
            nivko
          </div>
          <h1 className="text-6xl font-bold">Hi, I&apos;m Niv Levi</h1>
          <p className="text-xl max-w-2xl">
            Welcome to my personal website. I&apos;m a passionate professional
            dedicated to creating amazing things.
          </p>
          <button className="mt-8 px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-lg hover:opacity-90 transition">
            Get in touch
          </button>
        </div>

        <div className="flex justify-center items-center w-full h-96 relative rounded-lg overflow-hidden mt-16">
          <Image
            src="/niv.png"
            alt="Niv Levi"
            fill
            className="rounded-lg object-cover object-[center_30%]"
          />
        </div>
      </main>
      <section
        id="about"
        className="py-20 min-h-[70vh] flex flex-row justify-between items-center"
      >
        <div className="flex flex-col gap-6 text-left">
          <h2 className="text-4xl font-bold">About Me</h2>
          <div className="grid grid-cols-2 gap-6 text-left">
            <p className="text-lg max-w-2xl">
              Niv Levi was born on a crisp autumn morning in the small,
              picturesque town of Tiberias, Israel. As the firstborn of Daniel
              and Sarah Levi, he was soon joined in the world by his twin
              brother, Tomer, just minutes later. Growing up, Niv and Tomer were
              inseparable, their days filled with adventures along the shores of
              the Sea of Galilee.
            </p>
            <p>
              From a young age, Niv showed a keen interest in nature and
              science, often collecting rocks and insects to study under his
              little microscope. His father, Daniel, a local carpenter, nurtured
              this curiosity by teaching him how to craft simple wooden toys,
              which inevitably led to more complex projects. Sarah, his mother,
              worked as a schoolteacher and instilled in him a love of reading
              and history, often telling him stories of their ancestors and the
              history, often telling him stories of their ancestors and the rich
              tapestry of Israeli culture.
            </p>
          </div>
        </div>
      </section>
      <section
        id="my-rival-brother"
        className="py-20 min-h-[70vh] grid grid-cols-2 gap-6"
      >
        <div className="flex flex-col gap-6 text-left">
          <h2 className="text-4xl font-bold">My Rival Brother</h2>
          <div>
            <p>
              As Niv and Tomer approached their teenage years, the bond with
              their family deepened. However, like all siblings, they
              occasionally had their rivalries, especially when it came to
              school achievements and sports. Despite this, they always
              supported each other, united by a familial bond that was difficult
              to break.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center w-full h-full relative rounded-lg overflow-hidden">
          <Image
            src="/niv-brother.jpg"
            alt="gal levi"
            fill
            className="rounded-lg object-cover object-[center_30%]"
          />
        </div>
      </section>
      <section id="military-life" className="py-20 min-h-[70vh]">
        <div className="flex justify-center items-center w-full h-96 relative rounded-lg overflow-hidden mb-16">
          <Image
            src="/my-military-life.jpg"
            alt="Niv Levi"
            fill
            className="rounded-lg object-cover object-center"
          />
        </div>
        <div className="flex flex-col gap-6 text-left">
          <h2 className="text-4xl font-bold">Military Life</h2>
          <div className="grid grid-cols-2 gap-6 text-left">
            <p className="text-lg max-w-2xl">
              When Niv turned 18, he enlisted in the Israel Defense Forces, as
              is customary in Israel. He served in the Golani Brigade, where he
              experienced the camaraderie and challenges that come with military
              life. His time in the service was marked by a mix of intense
              training sessions and meaningful friendships, particularly with
              his commander, who became a mentor and a significant influence in
              his life. Niv&apos;s military experience sharpened his leadership
              skills and resilience, qualities that would later pave the way for
              his career.
            </p>
            <p>
              Throughout his service, Niv often thought of his family,
              especially during long nights on guard duty. He missed his twin
              brother, Tomer, who served in a different unit as a communications
              specialist. Their reunions, though infrequent, were filled with
              laughter and shared stories of their service time.
            </p>
          </div>
        </div>
      </section>
      <section id="projects" className="py-20 min-h-[70vh]">
        <div className="flex justify-center items-center w-full h-[500px] relative rounded-lg overflow-hidden mb-16">
          <Image
            src="/niv-tommy.jpg"
            alt="Niv Levi"
            fill
            className="rounded-lg object-cover object-[center_35%]"
          />
        </div>
        <div className="flex flex-col gap-6 text-left">
          <h2 className="text-4xl font-bold">True Friendship</h2>
          <div className="grid grid-cols-2 gap-6 text-left">
            <p className="text-lg max-w-2xl">
              Amidst all these transitions, Niv&apos;s loyal companion, a
              spirited German Shepherd named Rocky, was always by his side.
              Rocky had been a gift from his parents on his 12th birthday, and
              over the years, the dog had become much more than a pet; he was a
              member of the family.
            </p>
            <p>
              Rocky&apos;s unwavering loyalty and joyful antics were a constant
              source of comfort and happiness, especially during challenging
              times.
            </p>
          </div>
        </div>
      </section>
      <section
        id="my-success"
        className="py-20 min-h-[100vh] grid grid-cols-2 gap-6"
      >
        <div className="flex flex-col justify-center gap-6 text-left">
          <h2 className="text-4xl font-bold">My Success</h2>
          <div>
            <p>
              Today, Niv continues to work towards his degree, with dreams of
              one day leading environmental conservation efforts in Israel. His
              twin brother, Tomer, has started a tech start-up, and they still
              share the deep bond that only twins possess. Their parents, proud
              of both their sons, often recount tales of their childhood, much
              to everyone&apos;s amusement. As for Rocky, he&apos;s older now
              but still enjoys his leisurely walks with Niv, albeit a little
              slower than before.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center w-full h-full relative rounded-lg overflow-hidden">
          <Image
            src="/niv-success.jpg"
            alt="gal levi"
            fill
            className="rounded-lg object-cover object-[center_30%]"
          />
        </div>
      </section>
      <section id="the-end" className="py-20 min-h-[70vh]">
        <div className="flex flex-col justify-center items-center gap-6 text-left">
          <h2 className="text-5xl font-bold">The End</h2>
          <p>
            Through all of life&apos;s ups and downs, Niv Levi remains a
            testament to the resilience and enduring spirit of family,
            friendship, and loyalty.
          </p>
        </div>
      </section>
    </>
  );
}
