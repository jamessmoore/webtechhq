import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <main className="flex flex-1 flex-col items-center gap-10 px-8 py-5">
      <p className="blade-body-text tracking-[0.3em]">CONTACT ME</p>
      <ContactForm />
    </main>
  );
}
