const Privacy = () => {
  const P_CLASSES = "my-6";

  return (
    <div className="container mx-auto max-w-4xl px-6 py-4 sm:py-16">
      <h1 className="text-5xl font-bold">Support</h1>

      <p className={P_CLASSES}>
        If you are experiencing any issues with the Openfields app or hardware
        please contact Stephen:
      </p>

      <ul className="list-disc list-outside pb-3">
        <li>By email: stephenpozzi@gmail.com</li>
      </ul>
    </div>
  );
};

export default Privacy;
