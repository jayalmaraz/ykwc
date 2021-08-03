import { useState } from "react";

const ContactForm = () => {
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    setLoading(true);
    const res = await fetch("/api/referral-code", {
      method: "POST",
      body: JSON.stringify({ code }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
    });
    setLoading(false);

    if (res.ok) {
      setHasError(false);
      return;
    }

    setHasError(true);
  }

  return (
    <form className="bg-white dark:bg-gray-800" onSubmit={handleSubmit}>
      <div className="max-w-3xl px-6 pt-16 pb-14 mx-auto text-center">
        <h1 className="text-6xl font-bold tracking-tight text-gray-800 dark:text-gray-100 px-6">
          Enter your referral code here
        </h1>

        <div className="flex flex-col mt-8 space-y-3 sm:space-y-0 sm:flex-row sm:justify-center sm:-mx-0">
          <input
            required
            id="referral-code"
            type="text"
            className="w-full max-w-sm px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-none sm:mx-0 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:outline-none disabled:text-gray-300 focus:border-gray-800"
            placeholder="Six digit numeric code"
            value={code}
            onChange={(e) => setCode(e.currentTarget.value)}
            disabled={loading}
          />

          <button
            type="submit"
            className="px-4 py-2 text-xs font-bold tracking-wide text-white capitalize transition-colors duration-200 transform bg-black rounded-none sm:mx-0 hover:bg-gray-700 focus:outline-none focus:bg-gray-700 disabled:bg-gray-300"
            disabled={loading}
          >
            Unlock
          </button>
        </div>
      </div>

      <div
        className={`w-full text-white bg-${
          !loading && hasError ? "red-500" : "white"
        }`}
      >
        <div className="container flex items-center justify-between px-6 mx-auto h-14">
          <div className={!loading && hasError ? "flex" : "hidden"}>
            <svg viewBox="0 0 40 40" className="w-6 h-6 fill-current">
              <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z"></path>
            </svg>

            <p className="mx-3">Invalid code.</p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
