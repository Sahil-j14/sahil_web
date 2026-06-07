"use client";

import { useState } from "react";
import { profile } from "../lib/content";

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full border border-line bg-panel-2 px-4 py-3 font-body text-sm text-fg placeholder:text-fg-faint outline-none transition-colors focus:border-amber";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // honeypot: if a bot filled the hidden field, silently "succeed"
    if (formData.get("botcheck")) {
      setStatus("success");
      form.reset();
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    // exactly the official Web3Forms pattern: append the key and POST the FormData
    formData.append("access_key", profile.web3formsKey);
    formData.append("subject", "New message from your portfolio site");
    formData.append("from_name", "Portfolio Contact Form");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="hud-corner flex flex-col items-start gap-4 border border-cyan/40 bg-panel p-8">
        <span className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-cyan font-mono text-sm text-black">
            ✓
          </span>
          <span className="label text-cyan">Message sent</span>
        </span>
        <p className="text-lg text-fg">Thanks for reaching out.</p>
        <p className="text-sm text-fg-dim">
          Your message landed in my inbox. I&apos;ll get back to you soon.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 border border-line-bright px-5 py-2.5 font-mono text-[0.7rem] uppercase tracking-widest text-fg transition-colors hover:border-amber hover:text-amber"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="panel hud-corner p-6 md:p-8">
      <div className="label mb-6 text-[0.6rem]">// send a message</div>

      {/* honeypot field, hidden from humans */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="flex flex-col gap-5">
        <div>
          <label htmlFor="name" className="label mb-2 block text-[0.6rem]">
            Your name
          </label>
          <input id="name" name="name" type="text" required placeholder="Jane Doe" className={inputClass} />
        </div>

        <div>
          <label htmlFor="email" className="label mb-2 block text-[0.6rem]">
            Your email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@company.com"
            className={inputClass}
          />
          <p className="mt-1.5 font-mono text-[0.65rem] text-fg-faint">
            So I can reply. Never shown publicly.
          </p>
        </div>

        <div>
          <label htmlFor="message" className="label mb-2 block text-[0.6rem]">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell me what you're building..."
            className={`${inputClass} resize-y`}
          />
        </div>

        {status === "error" && (
          <p className="border border-danger/40 bg-danger/10 px-4 py-3 font-mono text-xs text-danger">
            {errorMsg}
          </p>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="group relative flex items-center justify-center gap-2 border border-amber bg-amber px-7 py-3.5 font-mono text-[0.74rem] font-semibold uppercase tracking-widest text-black transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
        >
          {status === "loading" ? (
            <>
              <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-black/30 border-t-black" />
              Sending...
            </>
          ) : (
            <>Send message →</>
          )}
        </button>
      </div>
    </form>
  );
}
