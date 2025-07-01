import { ThemeToggle } from "@/app/ThemeProvider/ThemeToggle";

function NavigationBar() {
  return (
    <header className="flex justify-around container items-center mb-16">
      <section>
        <h4>Logo</h4>
      </section>

      <section className="flex gap-4">
        <h6>
          <span className="text-primary font-s">#</span>Home
        </h6>
        <h6>
          <span className="text-primary font-s">#</span>Works
        </h6>
        <h6>
          <span className="text-primary font-s">#</span>About-me
        </h6>
        <h6>
          <span className="text-primary font-s">#</span>Contacts
        </h6>
      </section>
      <section>
        <ThemeToggle />
      </section>
    </header>
  );
}

export default NavigationBar;
