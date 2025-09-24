"use client";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import ProfileCard from "./ProfileCard";

function Intro() {
  const route = useRouter();
  return (
    <div>
      <div className="flex sm:flex-row flex-col items-center mb-10">
        <section>
          <h2>
            Manish is a <span className="text-primary ">web designer</span> and{" "}
            <span className="text-primary ">front-end developer</span>{" "}
          </h2>
          <p>
            He crafts responsive websites where technologies meet creativity
          </p>
          <Button
            className="bg-transparent text-forground border-2 border-primary-subtle rounded-b-sm"
            onClick={() => route.push("/contacts")}
          >
            Contact me!!
          </Button>
        </section>
        <section className="">
          <ProfileCard
            name="KM Manish"
            title="Software Engineer"
            handle="manishcodes"
            status="Online"
            contactText="Contact Me"
            avatarUrl="/image (1).jpg"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={true}
            onContactClick={() => route.push("/contacts")}
          />
        </section>
      </div>
      <div className="flex justify-center">
        <div className="md:inline-block hidden">
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
