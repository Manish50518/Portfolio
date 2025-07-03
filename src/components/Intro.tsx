import Image from "next/image";
import { Button } from "./ui/button";

function Intro() {
  return (
    <div>
      <div className="flex sm:flex-row flex-col items-center">
        <section>
          <h2>
            Manish is a <span className="text-primary ">web designer</span> and{" "}
            <span className="text-primary ">front-end developer</span>{" "}
          </h2>
          <p>
            He crafts responsive websites where technologies meet creativity
          </p>
          <Button className="bg-transparent text-forground border-2 border-primary-subtle rounded-b-sm">
            Contact me!!
          </Button>
        </section>
        <section className="">
          <Image
            width={700}
            height={700}
            src={"/defaultImg.svg"}
            alt="default image"
          />
        </section>
      </div>
      <div className="flex justify-center">
        <div className="inline-block">
          <section className="relative ">
            <h4 className="border border-default p-6 mb-0">
              With great power comes great electricity bill
            </h4>
            <h3 className="absolute -top-3 left-4 bg-three px-1 mb-0">
              &quot;
            </h3>
            <h3 className="absolute -bottom-6 left-120 bg-three px-1 mb-0">
              &quot;
            </h3>
          </section>
          <section className="flex justify-end">
            <h4 className="border border-default border-t-0 inline-block p-6 mb-0">
              - Dr. Who
            </h4>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Intro;
